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
const Wink = () => {
    return React.createElement("g", { id: 'Eyes/Wink-\uD83D\uDE09', transform: 'translate(0.000000, 8.000000)', fillOpacity: '0.599999964' },
        React.createElement("circle", { id: 'Eye', cx: '30', cy: '22', r: '6' }),
        React.createElement("path", { d: 'M70.4123979,24.204889 C72.2589064,20.4060854 76.4166529,17.7575774 81.2498107,17.7575774 C86.065907,17.7575774 90.2113521,20.3874194 92.0675822,24.1647016 C92.618991,25.2867751 91.8343342,26.2050591 91.0428374,25.5246002 C88.5917368,23.4173607 85.1109468,22.1013658 81.2498107,22.1013658 C77.5094365,22.1013658 74.1259889,23.3363293 71.6897696,25.3292186 C70.7990233,26.0578718 69.8723316,25.3159619 70.4123979,24.204889 Z', id: 'Winky-Wink', transform: 'translate(81.252230, 21.757577) rotate(-4.000000) translate(-81.252230, -21.757577) ' }));
};
exports.default = Wink;
