"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var Colors_1 = require("./Colors");
var Graphics_1 = require("./Graphics");
var GraphicShirt = function (_a) {
    var color = _a.color, graphicType = _a.graphicType;
    var path1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    var mask1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    return (React.createElement("g", { id: 'Clothing/Graphic-Shirt', transform: 'translate(0.000000, 170.000000)' },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z', id: path1 })),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1 })),
        React.createElement("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
        React.createElement(Colors_1.default, { maskID: mask1, color: color }),
        React.createElement(Graphics_1.default, { maskID: mask1, type: graphicType })));
};
exports.default = GraphicShirt;
