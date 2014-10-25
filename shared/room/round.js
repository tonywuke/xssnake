'use strict';

/**
 * @param {xss.room.PlayerRegistry} players
 * @param {xss.room.Options} options
 * @constructor
 */
xss.room.Round = function(players, options) {
    this.players = players;
    this.options = options;
    /** @type {number} */
    this.levelsetIndex = null;
    /** @type {number} */
    this.levelIndex = null;
    /** @type {xss.levelset.Levelset} */
    this.levelset = null;
    /** @type {xss.level.Level} */
    this.level = null;
};

xss.room.Round.prototype = {

    serialize: function() {
        return [this.levelsetIndex, this.levelIndex];
    },

    deserialize: function(serialized) {
        this.levelsetIndex = serialized[0];
        this.levelIndex = serialized[1];
    }

};