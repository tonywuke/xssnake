'use strict';

/**
 * Client-Server communication
 * @param onopenCallback {Function}
 * @constructor
 */
xss.Socket = function(onopenCallback) {
    this.onopenCallback = onopenCallback;
    this.connected = false;

    this.connection = new WebSocket('ws://' + xss.SERVER_ENDPOINT);
    this.connection.onopen = this.onopen.bind(this);
    this.connection.onclose = this.onclose.bind(this);
    this.connection.onerror = this.onclose.bind(this);
    this.connection.onmessage = this.onmessage.bind(this);

    this.bindEvents();
};

xss.Socket.prototype = {

    destruct: function() {
        this.connected = false;

        if (this.heartbeat) {
            this.heartbeat.destruct();
            this.heartbeat = null;
        }

        this.connection.onopen = null;
        this.connection.onclose = null;
        this.connection.onerror = null;
        this.connection.onmessage = null;

        xss.event.off(xss.EVENT_PING, xss.NS_SOCKET);
        xss.event.off(xss.EVENT_COMBI, xss.NS_SOCKET);
        xss.event.off(xss.EVENT_PONG, xss.NS_SOCKET);

        // Close explicitely when CONNECTING and OPEN.
        if (this.connection.readyState <= 1) {
            this.connection.close();
        }
    },

    onopen: function() {
        this.connected = true;
        this.onopenCallback();
        this.heartbeat = new xss.netcode.ClientHeartbeat(this);
    },

    onclose: function() {
        if (this.connected) {
            xss.util.error(xss.COPY_SOCKET_CONNECTION_LOST);
        } else {
            xss.util.error(xss.COPY_SOCKET_CANNOT_CONNECT);
        }
        this.destruct();
    },

    timeout: function() {
        xss.util.error(xss.COPY_SOCKET_SERVER_AWAY);
        this.destruct();
    },

    /**
     * @param {string} name
     * @param {*=} data
     */
    emit: function(name, data) {
        var emit = [name];
        if (data) {
            emit.push(data);
        }
        console.log(emit);
        this.connection.send(JSON.stringify(emit));
    },

    /**
     * @param {Object} ev
     */
    onmessage: function(ev) {
        var data = JSON.parse(ev.data);
        xss.event.trigger(data[0], data[1]);
    },

    bindEvents: function() {
        xss.event.on(xss.EVENT_COMBI, xss.NS_SOCKET, this._combinedEvents.bind(this));
    },

    /**
     * Combined package, delegate.
     * @param {Array.<Array>} data
     */
    _combinedEvents: function(data) {
        for (var i = 0, m = data.length; i < m; i++) {
            xss.event.trigger(data[i][0], data[i][1]);
        }
    }

};
