"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var facialHair_1 = require("./facialHair");
var HairColor_1 = require("./HairColor");
var ShortHairFrizzle = function (_a) {
    var children = _a.children, hairColor = _a.hairColor, facialHairColor = _a.facialHairColor, facialHairType = _a.facialHairType;
    var filter1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-filter-'); })[0];
    var mask1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    var mask2 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    var path1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    var path2 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
        React.createElement("defs", null,
            React.createElement("rect", { id: path2, x: '0', y: '0', width: '264', height: '280' }),
            React.createElement("path", { d: 'M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z', id: path1 }),
            React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                React.createElement("feMerge", null,
                    React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                    React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
        React.createElement("mask", { id: mask2, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path2 })),
        React.createElement("g", { id: 'Mask' }),
        React.createElement("g", { id: 'Top/Short-Hair/Frizzle', mask: "url(#".concat(mask2, ")") },
            React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
                React.createElement("mask", { id: mask1, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path1 })),
                React.createElement("use", { id: 'Hair-Maks', stroke: 'none', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
                React.createElement(HairColor_1.default, { maskID: mask1, color: hairColor }),
                children))));
};
exports.default = ShortHairFrizzle;
