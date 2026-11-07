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
const Blank_1 = __importDefault(require("./Blank"));
const Kurt_1 = __importDefault(require("./Kurt"));
const Prescription01_1 = __importDefault(require("./Prescription01"));
const Prescription02_1 = __importDefault(require("./Prescription02"));
const Round_1 = __importDefault(require("./Round"));
const Sunglasses_1 = __importDefault(require("./Sunglasses"));
const Wayfarers_1 = __importDefault(require("./Wayfarers"));
const components = {
    Blank: Blank_1.default,
    Kurt: Kurt_1.default,
    Prescription01: Prescription01_1.default,
    Prescription02: Prescription02_1.default,
    Round: Round_1.default,
    Sunglasses: Sunglasses_1.default,
    Wayfarers: Wayfarers_1.default,
};
const Accessories = ({ type }) => {
    const Component = (0, lookup_1.default)(components, type, 'Blank');
    return Component ? React.createElement(Component, null) : null;
};
exports.default = Accessories;
