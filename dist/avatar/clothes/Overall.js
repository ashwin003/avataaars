"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var Colors_1 = require("./Colors");
var Overall = function (_a) {
    var color = _a.color;
    var path1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    var mask1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    return (React.createElement("g", { id: 'Clothing/Overall', transform: 'translate(0.000000, 170.000000)' },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z', id: path1 })),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1 })),
        React.createElement("use", { id: 'Overall', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
        React.createElement(Colors_1.default, { maskID: mask1, color: color }),
        React.createElement("circle", { id: 'Button', fill: '#F4F4F4', fillRule: 'evenodd', cx: '81', cy: '83', r: '5' }),
        React.createElement("circle", { id: 'Button', fill: '#F4F4F4', fillRule: 'evenodd', cx: '183', cy: '83', r: '5' })));
};
exports.default = Overall;
