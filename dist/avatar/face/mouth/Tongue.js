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
const Tongue = () => {
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    return (React.createElement("g", { id: 'Mouth/Tongue', transform: 'translate(2.000000, 52.000000)' },
        React.createElement("defs", null,
            React.createElement("path", { d: 'M29,15.6086957 C30.410031,25.2313711 41.062182,33 54,33 C66.9681454,33 77.6461342,25.183301 79,14.7391304 C79.1012093,14.3397326 78.775269,13 76.826087,13 C56.838426,13 41.7395748,13 31.173913,13 C29.3833142,13 28.870211,14.2404669 29,15.6086957 Z', id: path1 })),
        React.createElement("mask", { id: mask1, fill: 'white' },
            React.createElement("use", { xlinkHref: '#' + path1 })),
        React.createElement("use", { id: 'Mouth', fillOpacity: '0.699999988', fill: '#000000', fillRule: 'evenodd', xlinkHref: '#' + path1 }),
        React.createElement("rect", { id: 'Teeth', fill: '#FFFFFF', fillRule: 'evenodd', mask: `url(#${mask1})`, x: '39', y: '2', width: '31', height: '16', rx: '5' }),
        React.createElement("path", { d: 'M65.9841079,23.7466656 C65.9945954,23.8296335 66,23.9141856 66,24 L66,33 C66,39.0751322 61.0751322,44 55,44 L54,44 C47.9248678,44 43,39.0751322 43,33 L43,24 L43,24 C43,23.9141856 43.0054046,23.8296335 43.0158921,23.7466656 C43.0053561,23.6651805 43,23.5829271 43,23.5 C43,21.5670034 45.9101491,20 49.5,20 C51.510438,20 53.3076958,20.4914717 54.5,21.2634601 C55.6923042,20.4914717 57.489562,20 59.5,20 C63.0898509,20 66,21.5670034 66,23.5 C66,23.5829271 65.9946439,23.6651805 65.9841079,23.7466656 Z', id: 'Tongue', fill: '#FF4F6D', fillRule: 'evenodd' })));
};
exports.default = Tongue;
