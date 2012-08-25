/*jshint globalstrict:true, sub:true*/
/*globals XSS, Client, io*/

'use strict';

/**
 * Client-Server communication
 * @constructor
 */
function Socket(callback) {
    this.host = 'http://localhost:8080';
    this.connect(callback);
}

Socket.prototype = {

    connect: function(callback) {
        XSS.utils.loadScript('http://localhost:8080/socket.io/socket.io.js', function() {
            this.socket = this.getSocket(this.host);
            this._addEventListeners(callback);
        }.bind(this));
    },

    /**
     * @param {string} host
     * @return {{on: function(string, function(Object)) }}
     */
    getSocket: function(host) {
        return io.connect(host);
    },

    _addEventListeners: function(callback) {
        this.socket.on('/c/connect', function(id) {
            XSS.me = new Client(id);
            if (callback) {
                callback(this);
            }
        }.bind(this));

        this.socket.on('/c/notice', function(notice) {
            console.log(notice);
        }.bind(this));

        this.socket.on('/c/start', this._start.bind(this));
    },

    /**
     * @param data {Object}
     * @private
     */
    _start: function(data) {
        console.log('You are player:', data['index']);
        console.log('Names:', data['names']);
        console.log('Capacity:', data['capacity']);
    },

    emit: function(action, data) {
        this.socket.emit(action, data);
    }

};