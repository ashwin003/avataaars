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
const ScreamOpen = () => {
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    return (React.createElement("g", { id: 'Mouth/Scream-Open', transform: 'translate(2.000000, 52.000000)' },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M34.0082051,15.1361102 C35.1280248,29.123916 38.2345159,40.9925405 53.9961505,40.9999965 C69.757785,41.0074525 72.9169073,29.0566179 73.9942614,15.0063928 C74.0809675,13.8756222 73.1738581,12.9999965 72.0369872,12.9999965 C65.3505138,12.9999965 62.6703194,14.9936002 53.9894323,14.9999965 C45.3085452,15.0063928 40.7567994,12.9999965 36.0924943,12.9999965 C34.9490269,12.9999965 33.8961688,13.7366502 34.0082051,15.1361102 Z', id: path1 })),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1, transform: 'translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) ' })),
        React.createElement("use", { id: 'Mouth', fillOpacity: '0.699999988', fill: '#000000', fillRule: 'evenodd', transform: 'translate(54.000000, 26.999998) scale(1, -1) translate(-54.000000, -26.999998) ', xlinkHref: '#' + path1 }),
        React.createElement("rect", { id: 'Teeth', fill: '#FFFFFF', fillRule: 'evenodd', mask: `url(#${mask1})`, x: '39', y: '2', width: '31', height: '16', rx: '5' }),
        React.createElement("g", { id: 'Tongue', strokeWidth: '1', fillRule: 'evenodd', mask: `url(#${mask1})`, fill: '#FF4F6D' },
            React.createElement("g", { transform: 'translate(38.000000, 32.000000)', id: 'Say-ahhhh' },
                React.createElement("circle", { cx: '11', cy: '11', r: '11' }),
                React.createElement("circle", { cx: '21', cy: '11', r: '11' })))));
};
exports.default = ScreamOpen;
