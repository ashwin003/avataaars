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
const Colors_1 = __importDefault(require("./Colors"));
const Overall = ({ color }) => {
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
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
