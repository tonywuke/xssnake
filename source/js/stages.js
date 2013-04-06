/*jshint globalstrict:true, es5:true, sub:true, evil:true*/
/*globals XSS, SelectMenu, SelectStage, ScreenStage, InputStage, Font, FormStage, Form, GameStage, Shape*/

'use strict';

XSS.stages = {

    /**
     * @return {SelectStage}
     */
    main: function() {
        var menu, name, welcome;

        name = XSS.util.storage('name');
        welcome = name ?
                  'WLCM BCK ' + name.toUpperCase() + '!' :
                  'WELCOME STRANGER!!';

        menu = new SelectMenu('main', welcome);
        menu.addOption(null, XSS.stages.inputName,
            'MULTIPLAYER',
            'Play with a friend or (un)friendly stranger.');
        menu.addOption(null, XSS.stages.startGame,
            'SINGLE PLAYER',
            'Play with yourself, see how long you can get your snake.');
        menu.addOption(null, XSS.stages.themesScreen,
            'THEEEMES',
            'Change the color scheme YAY!');
        menu.addOption(null, XSS.stages.creditsScreen,
            'CREDITS',
            'Evil genius.');

        if (XSS.util.hash('room')) {
            XSS.stages._autoJoinRoom();
        }

        return new SelectStage(menu);
    },

    _autoJoinRoom: function() {
        var pubKey = 'RSTAT';

        XSS.util.instruct('Connecting...', 0, true);

        XSS.pubsub.subscribe(XSS.PUB_ROOM_STATUS, pubKey, function(data) {
            var error = Room.prototype.errorCodeToStr(data[1]);
            XSS.pubsub.unsubscribe(XSS.PUB_ROOM_STATUS, pubKey);
            if (!data[0]) {
                XSS.util.error(error);
            } else {
                XSS._autoJoinRoomData = data;
                XSS.stageflow.switchStage(XSS.stages.autoJoin);
            }
        });

        XSS.socket = new Socket(function() {
            XSS.util.instruct('Getting room properties...', 1000, true);
            window.setTimeout(function() {
                XSS.socket.emit(
                    XSS.events.SERVER_ROOM_STATUS,
                    XSS.util.hash('room')
                );
            }, 1000);
        });
    },

    /**
     * @return {ScreenStage}
     */
    autoJoin: function() {
        var screen, left, top, data, names, opts, field = XSS.map.FIELD;

        left = XSS.MENU_LEFT;
        top = XSS.MENU_TOP;

        data = XSS._autoJoinRoomData;
        names = data[2].join(', ');
        opts = data[1];

        var diffs = {
            '1': 'Worm',
            '2': 'Snake',
            '3': 'Python'
        };

        var bools = {
            'false': 'Yes',
            'true': 'No'
        };

        screen = new Shape(
            XSS.transform.zoomX2(XSS.font.pixels('JOIN GAME'), left, top, true),
            XSS.font.pixels('' +
                'Players          ' + names + '\n' +
                'Difficulty        ' + diffs[opts[field.DIFFICULTY]] + '\n' +
                'Max Players    ' + opts[field.MAX_PLAYERS] + '\n' +
                'Power-Ups      ' + bools[opts[field.POWERUPS]] + '\n' +
                'XSS ' + XSS.UC_SKULL + '          ' + bools[opts[field.XSS]] + '\n\n' +
                'Press ' + XSS.UC_ENTER_KEY + ' to join this game.',
                left, top + XSS.SUBHEADER_HEIGHT)
        );

        return new ScreenStage(screen);


// , next = XSS.stages.multiplayer
//        stage = new InputStage('name', next, 'JOIN ROOM', label);
//        stage.minChars = 2;
//        stage.maxWidth = XSS.UI_MAX_NAME_WIDTH;
//        stage.inputSubmit = XSS.stages._autojoinSubmit;

//        return stage;
    },

    /**
     * @return {FormStage}
     */
    multiplayer: function() {
        var form, next, field = XSS.map.FIELD, value = XSS.map.VALUE;

        next = function(values) {
            if (values[field.XSS]) {
                return XSS.stages.captcha;
            }
            return XSS.stages.startGame;
        };

        form = new Form('GAME OPTIONS', next);

        form.addField(field.DIFFICULTY, 'LEVEL DIFFICULTY', [
            [value.MEDIUM, 'SNAKE'],
            [value.HARD, 'PYTHON'],
            [value.EASY, 'WORM']
        ]);

        form.addField(field.POWERUPS, 'POWER-UPS', [
            [true, 'YES'],
            [false, 'NO']
        ]);

        // Trololol
        form.addField('', 'WEIRD BUGS', [
            ['YES'],
            ['OK'],
            ['TRUE'],
            ['ACCEPT'],
            ['ENABLE'],
            ['OUI!']
        ]);

        form.addField(field.PRIVATE, 'PRIVATE', [
            [false, 'NO'],
            [true, 'YES']
        ]);

        form.addField(field.XSS, 'XSS ' + XSS.UC_SKULL, [
            [false, 'NO'],
            [true, 'YES']
        ]);

        form.addField(field.MAX_PLAYERS, 'MAX PLAYERS', [
            [6],
            [1],
            [2],
            [3],
            [4],
            [5]
        ]);

        return new FormStage(form);
    },

    /**
     * @return {InputStage}
     */
    captcha: function() {
        var challenges, challenge, intro, stage, str, digit,
            nextstage = XSS.stages.startGame;

        str = XSS.util.randomStr().substr(0, 3).toUpperCase();
        digit = String(XSS.util.randomBetween(0, 5));

        challenges = [
            'document.scripts[0].tagName',
            'document.documentElement.tagName',
            'location.protocol.split(\'\').reverse().join()[0]',
            '\'ouimerci!\'.charAt(Math.ceil(Math.random())*%d)',
            'Array(%d).join(encodeURI(\' \'))',
            'String(parseInt(\'FF\', 16))',
            'JSON.stringify({A:\'%s\'})',
            'String([1,2,3][3]).charAt(%d)',
            'String(typeof []).charAt(%d)',
            'String(typeof (5%2)).charAt(%d)',
            'String(/%s/.test(\'%s\'))',
            '\'%s%s\'.replace(/%s/, \'mew\')',
            '\'012345\'.lastIndexOf(\'%d\')',
            '\'%s\'+\'A\'+Math.pow(%d,2)',
            'String(new Date(\'2013-0%d-0%d\').getMonth())',
            'var A=%d,B=3;do{A++}while(B--); A;',
            'var A=3,B=%d;do{A++}while(B--); B;',
            'var A=%d;A++;++A;A+=1; A;',
            'var A=%d;A--;--A;A-=1; A;'
        ];

        challenge = String(XSS.util.randomItem(challenges));
        challenge = challenge.replace(/%s/g, str);
        challenge = challenge.replace(/%d/g, digit);

        intro = 'XSS mode allows the winner of a game to execute\n' +
                'Javascript in the browser of every loser. This may\n' +
                'damage you and/or your computer. To confirm that\n' +
                'you know Javascript and accept the risk, enter the\n' +
                'result of this statement:\n\n> ' +
                challenge + '\n> ';

        stage = new InputStage(null, nextstage, 'DANGER DANGER', intro);
        stage.inputSubmit = function(error, value, top) {
            XSS.stages._captchaSubmit.call(stage, value, challenge, top);
        };

        return stage;
    },

    /**
     * @return {SelectStage}
     */
    themesScreen: function() {
        var setTheme, menu = new SelectMenu('theme', 'THEEEMES');

        menu.selected = parseInt(XSS.util.storage('theme'), 10) || 0;

        setTheme = function(index) {
            XSS.canvas.setTheme(XSS.themes[index]);
            XSS.util.storage('theme', index);
        };

        for (var i = 0, m = XSS.themes.length; i < m; i++) {
            var title = XSS.themes[i].title,
                desc = XSS.themes[i].desc;
            menu.addOption(true, null, title, desc, setTheme);
        }

        return new SelectStage(menu);
    },

    /**
     * @return {ScreenStage}
     */
    creditsScreen: function() {
        var screen, left, top;

        left = XSS.MENU_LEFT;
        top = XSS.MENU_TOP;

        screen = new Shape(
            XSS.transform.zoomX2(XSS.font.pixels('CREDITS'), left, top, true),
            XSS.font.pixels('' +
                'Concept, Code, Pixels, Font & ' + XSS.UC_SKULL + ':\n' +
                'Blaise Kal, 2012-2013.\n\n' +
                'Website: www.blaise.io\n' +
                'Email: blaisekal@gmail.com\n\n' +
                'Thank you for playing!', left, top + XSS.SUBHEADER_HEIGHT)
        );

        return new ScreenStage(screen);
    },

    /**
     * @return {InputStage}
     */
    inputName: function() {
        var stage, next = XSS.stages.multiplayer;

        stage = new InputStage('name', next, 'HELLO', 'My name is ');

        stage.minChars = 2;
        stage.maxWidth = XSS.UI_MAX_NAME_WIDTH;
        stage.inputSubmit = XSS.stages._inputNameSubmit;

        return stage;
    },

    /**
     * @return {GameStage}
     */
    startGame: function() {
        return new GameStage();
    },

    /**
     * @param {string} value
     * @param {string} challenge
     * @param {number} top
     * @private
     */
    _captchaSubmit: function(value, challenge, top) {
        var shape, text = '> ACCESS DENIED!!';

        if (value.replace(/['"]/g, '') === String(eval(challenge))) { // 666
            text = '> bleep!';
            setTimeout(function() {
                XSS.stageflow.switchStage(this.nextStage);
            }.bind(this), 1000);
        }

        shape = XSS.font.shape(
            text,
            XSS.MENU_LEFT,
            top
        );
        shape.lifetime(0, 1000);
        XSS.shapes.message = shape;
    },

    /**
     * @param {string} error
     * @param {string} value
     * @param {number} top
     * @private
     */
    _autojoinSubmit: function(error, value, top) {
        var shape, text = error, duration = 500;

        if (!error) {
            text = 'Getting room properties...';
            XSS.socket = new Socket(function() {
                XSS.socket.emit(XSS.events.SERVER_ROOM_STATUS, XSS.util.hash('room'));
                duration = 5000;
            });
        }

        shape = XSS.font.shape(text, XSS.MENU_LEFT, top);
        shape.lifetime(0, duration);
        XSS.shapes.message = shape;
    },

    /**
     * @param {string} error
     * @param {string} value
     * @param {number} top
     * @private
     */
    _inputNameSubmit: function(error, value, top) {
        var wits, shape, text, duration = 500;

        wits = [
            '%s%s%s',
            'You have the same name as my mom',
            'LOVELY ' + new Array(4).join(XSS.UC_HEART),
            XSS.UC_SKULL,
            'Lamest name EVER',
            'Clever name!',
            'Mmm I love the way you handled that keyboard',
            'asdasdasdasd',
            'Please dont touch anything',
            'Hello %s',
            'Is that your real name?',
            'You dont look like a %s...',
            'Are you new here?',
            'I remember you',
            'I dont believe that\'s your name, but continue anyway',
            'Can I have your number?',
            'My name is NaN',
            '#$%^&*!!',
            'I thought I banned you?',
            'Jesus saves',
            'Is this your first time online?',
            'Are you from the internet?',
            '%s? OMGOMG'
        ];

        if (error) {
            text = error;
        } else {
            text = XSS.util.randomItem(wits);
            text = text.replace(/%s/g, value);
            duration = Math.max(text.length * 30, 400);
            setTimeout(function() {
                XSS.stageflow.switchStage(this.nextStage);
            }.bind(this), duration + 50);
        }

        shape = XSS.font.shape(
            text,
            XSS.MENU_LEFT,
            top
        );
        shape.lifetime(0, duration);
        XSS.shapes.message = shape;
    }

};