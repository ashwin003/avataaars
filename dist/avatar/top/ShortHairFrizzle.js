"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const useUniqueId_1 = __importDefault(require("../useUniqueId"));
const facialHair_1 = __importDefault(require("./facialHair"));
const HairColor_1 = __importDefault(require("./HairColor"));
const ShortHairFrizzle = ({ children, hairColor, facialHairColor, facialHairType }) => {
    const filter1 = (0, useUniqueId_1.default)('react-filter-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    const mask2 = (0, useUniqueId_1.default)('react-mask-');
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const path2 = (0, useUniqueId_1.default)('react-path-');
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
        React.createElement("g", { id: 'Top/Short-Hair/Frizzle', mask: `url(#${mask2})` },
            React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
                React.createElement("mask", { id: mask1, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path1 })),
                React.createElement("use", { id: 'Hair-Maks', stroke: 'none', fill: '#252E32', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
                React.createElement(HairColor_1.default, { maskID: mask1, color: hairColor }),
                children))));
};
exports.default = ShortHairFrizzle;
