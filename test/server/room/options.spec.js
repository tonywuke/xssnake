'use strict';

describe('Server', function() {
describe('Room', function() {
describe('Options', function() {

    require('../../../dist/instrument/server/start.js');

    var existingOptions;

    beforeEach(function() {
        existingOptions = new xss.room.Options();
        xss.levelSetRegistry = new xss.levelset.Registry();
        xss.levelSetRegistry.levelsets = new Array(2);
    });

    it('Matches when options are equal', function() {
        expect(existingOptions.matches(new xss.room.Options())).toBeTruthy();
    });

    it('Matches when requester wants a quick game', function() {
        var requestOptions = new xss.room.Options();
        requestOptions.isQuickGame = true;
        expect(existingOptions.matches(requestOptions)).toBeTruthy();
    });

    it('Ignores mismatches in maxPlayers, levelset, hasPowerups when requester wants a quick game', function() {
        var requestOptions = new xss.room.Options();
        requestOptions.isQuickGame = true;
        existingOptions.maxPlayers = 2;
        existingOptions.levelset = 1;
        existingOptions.hasPowerups = false;
        expect(existingOptions.matches(requestOptions)).toBeTruthy();
    });

    it('Does not apply for quick game when room is private', function() {
        existingOptions.isPrivate = true;
        expect(existingOptions.matches(
            new xss.room.Options(new xss.room.Options()))
        ).toBeFalsy();
    });

    it('Does not apply for quick game when room has XSS enabled', function() {
        existingOptions.isXSS = true;
        expect(existingOptions.matches(
            new xss.room.Options(new xss.room.Options()))
        ).toBeFalsy();
    });

    it('Serializes', function() {
        var s = existingOptions.serialize();
        expect(s.length).toBe(6);
        expect(s[0]).toBe(6, 'maxPlayers');
        expect(s[1]).toBe(0, 'levelset');
        expect(s[2]).toBe(0, 'isQuickGame');
        expect(s[3]).toBe(1, 'hasPowerups');
        expect(s[4]).toBe(0, 'isPrivate');
        expect(s[5]).toBe(0, 'isXSS');
    });

});
});
});