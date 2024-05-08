"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var Squint = function () {
    var path1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    var path2 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    var mask1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    var mask2 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    return (React.createElement("g", { id: 'Eyes/Squint-\uD83D\uDE0A', transform: 'translate(0.000000, 8.000000)' },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path1 }),
            React.createElement("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path2 })),
        React.createElement("g", { id: 'Eye', transform: 'translate(16.000000, 13.000000)' },
            React.createElement("mask", { id: mask1, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path1 })),
            React.createElement("use", { id: 'The-white-stuff', fill: '#FFFFFF', xlinkHref: '#' + path1 }),
            React.createElement("circle", { fillOpacity: '0.699999988', fill: '#000000', mask: "url(#".concat(mask1, ")"), cx: '14', cy: '10', r: '6' })),
        React.createElement("g", { id: 'Eye', transform: 'translate(68.000000, 13.000000)' },
            React.createElement("mask", { id: mask2, fill: 'white' },
                React.createElement("use", { xlinkHref: '#' + path2 })),
            React.createElement("use", { id: 'Eyeball-Mask', fill: '#FFFFFF', xlinkHref: '#' + path2 }),
            React.createElement("circle", { fillOpacity: '0.699999988', fill: '#000000', mask: "url(#".concat(mask2, ")"), cx: '14', cy: '10', r: '6' }))));
};
exports.default = Squint;
