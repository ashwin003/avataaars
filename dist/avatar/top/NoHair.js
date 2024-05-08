"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var lodash_1 = require("lodash");
var facialHair_1 = require("./facialHair");
var NoHair = function (_a) {
    var children = _a.children, facialHairColor = _a.facialHairColor, facialHairType = _a.facialHairType;
    var filter1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-filter-'); })[0];
    var mask1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-mask-'); })[0];
    var path1 = React.useState(function () { return (0, lodash_1.uniqueId)('react-path-'); })[0];
    return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
        React.createElement("defs", null,
            React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
            React.createElement("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1 },
                React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }),
                React.createElement("feMerge", null,
                    React.createElement("feMergeNode", { in: 'shadowMatrixOuter1' }),
                    React.createElement("feMergeNode", { in: 'SourceGraphic' })))),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1 })),
        React.createElement("g", { id: 'Mask' }),
        React.createElement("g", { id: 'Top/No-Hair', mask: "url(#".concat(mask1, ")") },
            React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
                children))));
};
exports.default = NoHair;
