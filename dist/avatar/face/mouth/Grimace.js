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
const useUniqueId_1 = __importDefault(require("../../useUniqueId"));
const Grimace = () => {
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    return (React.createElement("g", { id: 'Mouth/Grimace', transform: 'translate(2.000000, 52.000000)' },
        React.createElement("defs", null,
            React.createElement("rect", { id: path1, x: '24', y: '9', width: '60', height: '22', rx: '11' })),
        React.createElement("rect", { id: 'Mouth', fillOpacity: '0.599999964', fill: '#000000', fillRule: 'evenodd', x: '22', y: '7', width: '64', height: '26', rx: '13' }),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1 })),
        React.createElement("use", { id: 'Mouth', fill: '#FFFFFF', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
        React.createElement("path", { d: 'M71,22 L62,22 L62,34 L58,34 L58,22 L49,22 L49,34 L45,34 L45,22 L36,22 L36,34 L32,34 L32,22 L24,22 L24,18 L32,18 L32,6 L36,6 L36,18 L45,18 L45,6 L49,6 L49,18 L58,18 L58,6 L62,6 L62,18 L71,18 L71,6 L75,6 L75,18 L83.8666667,18 L83.8666667,22 L75,22 L75,34 L71,34 L71,22 Z', id: 'Grimace-Teeth', fill: '#E6E6E6', fillRule: 'evenodd', mask: `url(#${mask1})` })));
};
exports.default = Grimace;
