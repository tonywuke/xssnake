/*jshint globalstrict:true, es5:true, sub:true*/
/*globals XSS, Shape*/

/** @typedef {Array} */
var xxxShape;

/** @type {Object.<string, xxxShape>} */
XSS.PIXELS = {

    APPLE: [7, '' +
        '  XX  ' +
        '   X  ' +
        ' XX X ' +
        'X  XXX' +
        'X  XXX' +
        'X XXXX' +
        ' XXXX '],

    '■': [5, '' +
        'XXXX' +
        'XXXX' +
        'XXXX' +
        'XXXX' +
        'XXXX'],

    '♥': [6, '' +
        '  XX XX  ' +
        ' XXXXXXX ' +
        ' XXXXXXX ' +
        '  XXXXX  ' +
        '   XXX   ' +
        '    X    '],

    '☠': [6, '' +
        ' XX XXXX XX ' +
        ' X XXXXXX X ' +
        '   X XX X   ' +
        '   XXXXXX   ' +
        ' X  XXXX  X ' +
        ' XX XXXX XX '],

    '↵': [5, '' +
        '  X X' +
        ' XX X' +
        'XXXXX' +
        ' XX  ' +
        '  X  '],


    '←': [5, '' +
        '  X  ' +
        ' XX  ' +
        'XXXXX' +
        ' XX  ' +
        '  X  '],

    '↑': [5, '' +
        '  X  ' +
        ' XXX ' +
        'XXXXX' +
        '  X  ' +
        '  X  '],

    '→': [5, '' +
        '  X  ' +
        '  XX ' +
        'XXXXX' +
        '  XX ' +
        '  X  '],

    '↓': [5, '' +
        '  X  ' +
        '  X  ' +
        'XXXXX' +
        ' XXX ' +
        '  X  '],

    '•': [5, '' +
        '  ' +
        '  ' +
        'XX' +
        'XX' +
        '  '],

    '@': [6, '' +
        ' XXXX ' +
        'X    X' +
        'X XX X' +
        'X XXX ' +
        'X     ' +
        ' XXX  '],

    ' ': [5, '' +
        '  ' +
        '  ' +
        '  ' +
        '  ' +
        '  '],

    '.': [5, '' +
        ' ' +
        ' ' +
        ' ' +
        ' ' +
        'X'],

    ',': [6, '' +
        ' ' +
        ' ' +
        ' ' +
        ' ' +
        'X' +
        'X'],

    ':': [5, '' +
        ' ' +
        'X' +
        ' ' +
        ' ' +
        'X'],

    ';': [6, '' +
        '  ' +
        ' X' +
        '  ' +
        '  ' +
        'XX' +
        ' X'],

    '!': [5, '' +
        'X' +
        'X' +
        'X' +
        ' ' +
        'X'],

    '?': [5, '' +
        ' XX ' +
        'X  X' +
        '  X ' +
        '    ' +
        '  X '],

    '&': [5, '' +
        ' X  ' +
        'X X ' +
        ' X  ' +
        'X X ' +
        ' X X'],

    '-': [5, '' +
        '   ' +
        '   ' +
        'XXX' +
        '   ' +
        '   '],

    '_': [6, '' +
        '    ' +
        '    ' +
        '    ' +
        '    ' +
        '    ' +
        'XXXX'],

    '+': [5, '' +
        '   ' +
        '   ' +
        ' X ' +
        'XXX' +
        ' X '],

    '=': [5, '' +
        '    ' +
        'XXXX' +
        '    ' +
        'XXXX'],

    '\'': [5, '' +
        'X' +
        'X' +
        ' ' +
        ' ' +
        ' '],

    '"': [5, '' +
        'X X' +
        'X X' +
        '   ' +
        '   ' +
        '   '],

    '(': [6, '' +
        '  X' +
        ' X ' +
        ' X ' +
        ' X ' +
        ' X ' +
        '  X'],

    ')': [6, '' +
        'X  ' +
        ' X ' +
        ' X ' +
        ' X ' +
        ' X ' +
        'X  '],

    '[': [6, '' +
        ' XX' +
        ' X ' +
        ' X ' +
        ' X ' +
        ' X ' +
        ' XX'],

    ']': [6, '' +
        'XX ' +
        ' X ' +
        ' X ' +
        ' X ' +
        ' X ' +
        'XX '],

    '{': [6, '' +
        '   X' +
        '  X ' +
        ' X  ' +
        '  X ' +
        '  X ' +
        '   X'],

    '}': [6, '' +
        'X   ' +
        ' X  ' +
        '  X ' +
        ' X  ' +
        ' X  ' +
        'X   '],

    '\\': [5, '' +
        'X    ' +
        ' X   ' +
        '  X  ' +
        '   X ' +
        '    X'],

    '/': [5, '' +
        '    X' +
        '   X ' +
        '  X  ' +
        ' X   ' +
        'X    '],

    '<': [5, '' +
        '  X ' +
        ' X  ' +
        'X   ' +
        ' X  ' +
        '  X '],

    '>': [5, '' +
        ' X  ' +
        '  X ' +
        '   X' +
        '  X ' +
        ' X  '],

    '0': [5, '' +
        ' XX ' +
        'X XX' +
        'XX X' +
        'X  X' +
        ' XX '],

    '1': [5, '' +
        ' X  ' +
        'XX  ' +
        ' X  ' +
        ' X  ' +
        'XXX '],

    '2': [5, '' +
        'XXX ' +
        '   X' +
        '  X ' +
        ' X  ' +
        'XXXX'],

    '3': [5, '' +
        'XXX ' +
        '   X' +
        ' XX ' +
        '   X' +
        'XXX '],

    '4': [5, '' +
        'X  X' +
        'X  X' +
        'XXXX' +
        '   X' +
        '   X'],

    '5': [5, '' +
        'XXXX' +
        'X   ' +
        'XXX ' +
        '   X' +
        'XXX '],

    '6': [5, '' +
        ' XX ' +
        'X   ' +
        'XXX ' +
        'X  X' +
        ' XX '],

    '7': [5, '' +
        'XXXX' +
        '  X ' +
        ' X  ' +
        ' X  ' +
        ' X  '],

    '8': [5, '' +
        ' XX ' +
        'X  X' +
        ' XX ' +
        'X  X' +
        ' XX '],
    '9': [5, '' +
        ' XX ' +
        'X  X' +
        ' XXX' +
        '   X' +
        ' XX '],

    'A': [5, '' +
        ' XX ' +
        'X  X' +
        'XXXX' +
        'X  X' +
        'X  X'],

    'B': [5, '' +
        'XXX ' +
        'X  X' +
        'XXX ' +
        'X  X' +
        'XXX '],

    'C': [5, '' +
        ' XXX' +
        'X   ' +
        'X   ' +
        'X   ' +
        ' XXX'],

    'D': [5, '' +
        'XXX ' +
        'X  X' +
        'X  X' +
        'X  X' +
        'XXX '],

    'E': [5, '' +
        'XXXX' +
        'X   ' +
        'XXX ' +
        'X   ' +
        'XXXX'],

    'F': [5, '' +
        'XXXX' +
        'X   ' +
        'XXX ' +
        'X   ' +
        'X   '],

    'G': [5, '' +
        ' XX ' +
        'X   ' +
        'X XX' +
        'X  X' +
        ' XXX'],

    'H': [5, '' +
        'X  X' +
        'X  X' +
        'XXXX' +
        'X  X' +
        'X  X'],

    'I': [5, '' +
        'X' +
        'X' +
        'X' +
        'X' +
        'X'],

    'J': [5, '' +
        'XXX' +
        '  X' +
        '  X' +
        '  X' +
        'XX '],

    'K': [5, '' +
        'X  X' +
        'X X ' +
        'XX  ' +
        'X X ' +
        'X  X'],

    'L': [5, '' +
        'X  ' +
        'X  ' +
        'X  ' +
        'X  ' +
        'XXX'],

    'M': [5, '' +
        'X   X' +
        'XX XX' +
        'X X X' +
        'X   X' +
        'X   X'],

    'N': [5, '' +
        'X  X' +
        'XX X' +
        'X XX' +
        'X  X' +
        'X  X'],

    'O': [5, '' +
        ' XX ' +
        'X  X' +
        'X  X' +
        'X  X' +
        ' XX '],

    'P': [5, '' +
        'XXX ' +
        'X  X' +
        'XXX ' +
        'X   ' +
        'X   '],

    'Q': [6, '' +
        ' XX ' +
        'X  X' +
        'X  X' +
        'X  X' +
        ' XX ' +
        '   X'],

    'R': [5, '' +
        'XXX ' +
        'X  X' +
        'XXX ' +
        'X  X' +
        'X  X'],

    'S': [5, '' +
        ' XXX' +
        'X   ' +
        ' XX ' +
        '   X' +
        'XXX '],

    'T': [5, '' +
        'XXXXX' +
        '  X  ' +
        '  X  ' +
        '  X  ' +
        '  X  '],

    'U': [5, '' +
        'X  X' +
        'X  X' +
        'X  X' +
        'X  X' +
        ' XX '],

    'V': [5, '' +
        'X   X' +
        'X   X' +
        'X   X' +
        ' X X ' +
        '  X  '],

    'W': [5, '' +
        'X   X' +
        'X   X' +
        'X X X' +
        'X X X' +
        ' X X '],

    'X': [5, '' +
        'X  X' +
        'X  X' +
        ' XX ' +
        'X  X' +
        'X  X'],

    'Y': [5, '' +
        'X   X' +
        ' X X ' +
        '  X  ' +
        '  X  ' +
        '  X  '],

    'Z': [5, '' +
        'XXXXX' +
        '   X ' +
        '  X  ' +
        ' X   ' +
        'XXXXX'],

    'a': [5, '' +
        '   ' +
        ' XX' +
        'X X' +
        'X X' +
        ' XX'],

    'b': [5, '' +
        'X  ' +
        'XX ' +
        'X X' +
        'X X' +
        'XX '],

    'c': [5, '' +
        '   ' +
        ' XX' +
        'X  ' +
        'X  ' +
        ' XX'],

    'd': [5, '' +
        '  X' +
        ' XX' +
        'X X' +
        'X X' +
        ' XX'],

    'e': [5, '' +
        '   ' +
        ' XX' +
        'X X' +
        'XX ' +
        ' XX'],

    'f': [5, '' +
        ' XX' +
        'X  ' +
        'XX ' +
        'X  ' +
        'X  '],

    'g': [6, '' +
        '   ' +
        ' XX' +
        'X X' +
        'XX ' +
        '  X' +
        'XX '],

    'h': [5, '' +
        'X  ' +
        'X  ' +
        'XX ' +
        'X X' +
        'X X'],

    'i': [5, '' +
        'X' +
        ' ' +
        'X' +
        'X' +
        'X'],

    'j': [6, '' +
        ' X' +
        '  ' +
        ' X' +
        ' X' +
        ' X' +
        'X '],

    'k': [5, '' +
        'X  ' +
        'X X' +
        'XX ' +
        'X X' +
        'X X'],

    'l': [5, '' +
        'X ' +
        'X ' +
        'X ' +
        'X ' +
        ' X'],

    'm': [5, '' +
        '     ' +
        ' X X ' +
        'X X X' +
        'X X X' +
        'X X X'],

    'n': [5, '' +
        '   ' +
        'XX ' +
        'X X' +
        'X X' +
        'X X'],

    'o': [5, '' +
        '   ' +
        ' X ' +
        'X X' +
        'X X' +
        ' X '],

    'p': [6, '' +
        '   ' +
        'XX ' +
        'X X' +
        'X X' +
        'XX ' +
        'X  '],

    'q': [6, '' +
        '   ' +
        ' XX' +
        'X X' +
        ' XX' +
        '  X' +
        '  X'],

    'r': [5, '' +
        '   ' +
        ' XX' +
        'X  ' +
        'X  ' +
        'X  '],

    's': [5, '' +
        '   ' +
        ' XX' +
        'XX ' +
        '  X' +
        'XX '],

    't': [5, '' +
        'X ' +
        'X ' +
        'XX' +
        'X ' +
        ' X'],

    'u': [5, '' +
        '   ' +
        'X X' +
        'X X' +
        'X X' +
        ' XX'],

    'v': [5, '' +
        '   ' +
        'X X' +
        'X X' +
        'X X' +
        ' X '],

    'w': [5, '' +
        '     ' +
        'X   X' +
        'X X X' +
        'X X X' +
        ' X X '],

    'x': [5, '' +
        '    ' +
        'X  X' +
        ' XX ' +
        ' XX ' +
        'X  X'],

    'y': [6, '' +
        '   ' +
        'X X' +
        'X X' +
        ' XX' +
        '  X' +
        'XX '],

    'z': [5, '' +
        '   ' +
        'XXX' +
        '  X' +
        'XX ' +
        'XXX']
};

// Aliases
XSS.PIXELS['‘'] = XSS.PIXELS['’'] = XSS.PIXELS['\''];
XSS.PIXELS['“'] = XSS.PIXELS['”'] = XSS.PIXELS['"'];