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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Dizzy = () => {
    return React.createElement("g", { id: 'Eyes/X-Dizzy-\uD83D\uDE35', transform: 'translate(0.000000, 8.000000)', fillOpacity: '0.599999964', fillRule: 'nonzero' },
        React.createElement("path", { d: 'M29,25.2 L34.5,30.7 C35,31.1 35.7,31.1 36.1,30.7 L37.7,29.1 C38.1,28.6 38.1,27.9 37.7,27.5 L32.2,22 L37.7,16.5 C38.1,16 38.1,15.3 37.7,14.9 L36.1,13.3 C35.6,12.9 34.9,12.9 34.5,13.3 L29,18.8 L23.5,13.3 C23,12.9 22.3,12.9 21.9,13.3 L20.3,14.9 C19.9,15.3 19.9,16 20.3,16.5 L25.8,22 L20.3,27.5 C19.9,28 19.9,28.7 20.3,29.1 L21.9,30.7 C22.4,31.1 23.1,31.1 23.5,30.7 L29,25.2 Z', id: 'Eye' }),
        React.createElement("path", { d: 'M83,25.2 L88.5,30.7 C89,31.1 89.7,31.1 90.1,30.7 L91.7,29.1 C92.1,28.6 92.1,27.9 91.7,27.5 L86.2,22 L91.7,16.5 C92.1,16 92.1,15.3 91.7,14.9 L90.1,13.3 C89.6,12.9 88.9,12.9 88.5,13.3 L83,18.8 L77.5,13.3 C77,12.9 76.3,12.9 75.9,13.3 L74.3,14.9 C73.9,15.3 73.9,16 74.3,16.5 L79.8,22 L74.3,27.5 C73.9,28 73.9,28.7 74.3,29.1 L75.9,30.7 C76.4,31.1 77.1,31.1 77.5,30.7 L83,25.2 Z', id: 'Eye' }));
};
exports.default = Dizzy;
