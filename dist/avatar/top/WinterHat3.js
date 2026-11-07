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
const HatColor_1 = __importDefault(require("./HatColor"));
const WinterHat3 = ({ children, hatColor, facialHairColor, facialHairType }) => {
    const filter1 = (0, useUniqueId_1.default)('react-filter-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    const mask2 = (0, useUniqueId_1.default)('react-mask-');
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const path2 = (0, useUniqueId_1.default)('react-path-');
    const path3 = (0, useUniqueId_1.default)('react-path-');
    return (React.createElement("g", { id: 'Top' },
        React.createElement("defs", null,
            React.createElement("rect", { id: path3, x: '0', y: '0', width: '264', height: '280' }),
            React.createElement("path", { d: 'M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z', id: path1 }),
            React.createElement("filter", { x: '-0.7%', y: '-1.7%', width: '101.4%', height: '106.8%', filterUnits: 'objectBoundingBox', id: filter1 },
                React.createElement("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
                React.createElement("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0', type: 'matrix', in: 'shadowOffsetOuter1' })),
            React.createElement("path", { d: 'M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z', id: path2 })),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path3 })),
        React.createElement("g", { id: 'Mask' }),
        React.createElement("g", { id: 'Top/Accessories/Winter-Hat-3', transform: 'translate(-1.000000, 0.000000)' },
            React.createElement("g", { id: 'hat', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(67.000000, 12.000000)' },
                React.createElement("circle", { id: 'puff', fill: '#F4F4F4', cx: '66', cy: '8', r: '20' }),
                React.createElement("mask", { id: mask2, fill: 'white' },
                    React.createElement("use", { xlinkHref: '#' + path1 })),
                React.createElement("use", { id: 'hat-mask', fill: '#D8D8D8', xlinkHref: '#' + path1 }),
                React.createElement(HatColor_1.default, { maskID: mask2, color: hatColor, defaultColor: 'Red' })),
            React.createElement("g", { id: 'hat-front' },
                React.createElement("use", { fill: 'black', fillOpacity: '1', filter: `url(#${path2})`, xlinkHref: '#' + path2 }),
                React.createElement("use", { fill: '#F4F4F4', fillRule: 'evenodd', xlinkHref: '#' + path2 })),
            React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
            children)));
};
exports.default = WinterHat3;
