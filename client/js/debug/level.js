/* jshint devel: true */
'use strict';

xss.debug.NS = 'DEBUG';

// Debug URL: debug.html?debug=level:0
xss.debug.debugLevelMatch = location.search.match(/debug=level:([0-9]+)$/);
if (xss.debug.debugLevelMatch) {
    xss.menuSnake = true; // Prevent spawn.
    document.addEventListener('DOMContentLoaded', function() {
        window.setTimeout(xss.debug.level, 300);
    });
}

xss.debug.level = function() {
    var game;

    xss.socket = {emit: xss.util.noop};

    game = new xss.Game(0, Number(xss.debug.debugLevelMatch[1]), ['']);
    game.start();
    game.snakes[0].size = 5;

    xss.event.on(xss.PUB_GAME_TICK, xss.debug.NS, function() {
        if (game.snakes[0].limbo) {
            game.snakes[0].crash();
            xss.event.off(xss.PUB_GAME_TICK, xss.debug.NS);
        }
    });
};
