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
const lookup_1 = __importDefault(require("../../lookup"));
const BeardLight_1 = __importDefault(require("./BeardLight"));
const BeardMajestic_1 = __importDefault(require("./BeardMajestic"));
const BeardMedium_1 = __importDefault(require("./BeardMedium"));
const Blank_1 = __importDefault(require("./Blank"));
const MoustacheFancy_1 = __importDefault(require("./MoustacheFancy"));
const MoustacheMagnum_1 = __importDefault(require("./MoustacheMagnum"));
const components = {
    Blank: Blank_1.default,
    BeardMedium: BeardMedium_1.default,
    BeardLight: BeardLight_1.default,
    BeardMajestic: BeardMajestic_1.default,
    MoustacheFancy: MoustacheFancy_1.default,
    MoustacheMagnum: MoustacheMagnum_1.default,
};
const FacialHair = ({ type, color }) => {
    const Component = (0, lookup_1.default)(components, type, 'Blank');
    return Component ? React.createElement(Component, { color: color }) : null;
};
exports.default = FacialHair;
