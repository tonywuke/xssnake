/*jshint -W079*/
/*globals EventHandler, Font, Canvas, LevelCache, ShapeGenerator, Transform, AudioPlay, StageFlow */
'use strict';

var XSS = {}, CONST = {}, module = {};

window.onerror = function() {
    XSS.error = true;
};

document.addEventListener('DOMContentLoaded', function() {

    /** @type {Object.<string, Shape>} */
    XSS.shapes = {};

    // Global instances
    XSS.event     = new EventHandler();
    XSS.font      = new Font();
    XSS.canvas    = new Canvas();
    XSS.level     = new LevelCache();
    XSS.shapegen  = new ShapeGenerator();
    XSS.transform = new Transform();
    XSS.play      = new AudioPlay();
    XSS.flow      = new StageFlow();

}, false);