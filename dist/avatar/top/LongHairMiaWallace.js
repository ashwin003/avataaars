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
const LongHairMiaWallace = ({ children, hairColor, facialHairColor, facialHairType }) => {
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    const mask2 = (0, useUniqueId_1.default)('react-mask-');
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const path2 = (0, useUniqueId_1.default)('react-path-');
    return (React.createElement("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd' },
        React.createElement("defs", null,
            React.createElement("rect", { id: path1, x: '0', y: '0', width: '264', height: '280' }),
            React.createElement("path", { d: 'M148.859344,69 C148.952588,70.3212062 149,71.6550662 149,73 L149,111 C149,133.339168 135.919579,152.623239 117,161.610951 L117,170.317435 C135.145605,171.815797 152.721153,174.335027 163.000169,177 C172.952646,163.439362 185.884594,150.800081 186.000169,126 C186.085192,107.014914 158.324059,30.4276364 146.000169,15 C137.861928,4.81215989 117.30504,1.44935656 93.0001685,1 C68.6952966,0.550643437 48.9231015,6.50878211 41,16 C30.3189583,28.7950013 -0.0850232975,107.014914 4.92293245e-13,126 C0.115574613,150.800081 13.047523,163.439362 23,177 C33.2789946,174.335033 50.8544902,171.815807 69,170.317444 L69,161.610951 C50.0804213,152.623239 37,133.339168 37,111 L37,73 L37,73 C37,71.6550662 37.0474121,70.3212062 37.1406562,69 L65.3735517,69 L69.2529753,47.5561285 L72.058097,69 L148.859344,69 Z', id: path2 })),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1 })),
        React.createElement("g", { id: 'Mask' }),
        React.createElement("g", { id: 'Top/Long-Hair/Mia-Wallace', mask: `url(#${mask1})` },
            React.createElement("g", { transform: 'translate(-1.000000, 0.000000)' },
                React.createElement("path", { d: 'M69.0330562,76.212888 C81.9708809,43.1292208 95.6458945,26.5873873 110.058097,26.5873873 C110.596882,26.5873873 139.311316,26.3494141 158.112657,26.226792 C178.767149,35.5853581 193,55.3036503 193,78.114622 L193,93 L110.058097,93 L107.252975,69.820435 L103.373552,93 L69,93 L69,78.114622 C69,77.478246 69.0110772,76.844277 69.0330621,76.2128728 L69.0330562,76.212888 Z', id: 'Shadow', fillOpacity: '0.16', fill: '#000000', fillRule: 'evenodd' }),
                React.createElement("g", { id: 'Hair', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', transform: 'translate(40.000000, 19.000000)' },
                    React.createElement("mask", { id: mask2, fill: 'white' },
                        React.createElement("use", { xlinkHref: '#' + path2 })),
                    React.createElement("use", { id: 'Combined-Shape', fill: '#E6E6E6', xlinkHref: '#' + path2 }),
                    React.createElement(HairColor_1.default, { maskID: mask2, color: hairColor })),
                React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
                children))));
};
exports.default = LongHairMiaWallace;
