'use strict';

/**
 * @param {xss.levelset.Levelset} levelset
 * @extends {xss.level.Level}
 * @constructor
 */
xss.level.BlankLevel = function(levelset) {
    xss.level.Level.apply(this, arguments);
    this.image = xss.data.levels.blank;
};

xss.util.extend(xss.level.BlankLevel.prototype, xss.level.Level.prototype);
