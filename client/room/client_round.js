'use strict';

/**
 * @constructor
 * @param {xss.room.PlayerRegistry} players
 * @param {xss.room.Options} options
 * @extends {xss.room.Round}
 */
xss.room.ClientRound = function(players, options) {
    xss.room.Round.call(this, players, options);
    this.players = players;
    this.level = new xss.levels.BlankLevel(new xss.levelset.Config());
    this.game = new xss.game.ClientGame(this.level, this.players);
    this.preGameUI = new xss.ui.PreGame(players, options);
    this.bindEvents();
};

xss.util.extend(xss.room.ClientRound.prototype, xss.room.Round.prototype);
xss.util.extend(xss.room.ClientRound.prototype, {

    destruct: function() {
        this.unbindEvents();
        this.game.destruct();
        this.game = null;
        this.preGameUI.destruct();
        this.preGameUI = null;
    },

    bindEvents: function() {
        xss.event.on(xss.EV_PLAYERS_UPDATED, xss.NS_ROUND, this.updatePlayers.bind(this));
        xss.event.on(xss.NC_ROUND_SERIALIZE, xss.NS_ROUND, this.updateRound.bind(this));
        xss.event.on(xss.NC_ROUND_COUNTDOWN, xss.NS_ROUND, this.updateCountdown.bind(this));
        xss.event.on(xss.NC_ROUND_START, xss.NS_ROUND, this.startGame.bind(this));
    },

    unbindEvents: function() {
        xss.event.off(xss.EV_PLAYERS_UPDATED, xss.NS_ROUND);
        xss.event.off(xss.NC_ROUND_SERIALIZE, xss.NS_ROUND);
        xss.event.off(xss.NC_ROUND_COUNTDOWN, xss.NS_ROUND);
        xss.event.off(xss.NC_ROUND_START, xss.NS_ROUND);
    },

    updatePlayers: function() {
        this.game.updatePlayers(this.players);
        this.preGameUI.updateUI();
    },

    updateRound: function(serializedRound) {
        this.deserialize(serializedRound);
        this.level = this.getLevel(this.levelsetIndex, this.levelIndex);
        this.game.updateLevel(this.level);
    },

    updateCountdown: function(serializedStarted) {
        this.preGameUI.toggleCountdown(Boolean(serializedStarted[0]));
        this.preGameUI.updateUI();
    },

    startGame: function() {
        this.unbindEvents();
        this.preGameUI.destruct();
        this.game.start();
    }

});
