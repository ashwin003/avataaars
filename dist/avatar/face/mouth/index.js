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
const Concerned_1 = __importDefault(require("./Concerned"));
const Default_1 = __importDefault(require("./Default"));
const Disbelief_1 = __importDefault(require("./Disbelief"));
const Eating_1 = __importDefault(require("./Eating"));
const Grimace_1 = __importDefault(require("./Grimace"));
const Sad_1 = __importDefault(require("./Sad"));
const ScreamOpen_1 = __importDefault(require("./ScreamOpen"));
const Serious_1 = __importDefault(require("./Serious"));
const Smile_1 = __importDefault(require("./Smile"));
const Tongue_1 = __importDefault(require("./Tongue"));
const Twinkle_1 = __importDefault(require("./Twinkle"));
const Vomit_1 = __importDefault(require("./Vomit"));
const components = {
    Concerned: Concerned_1.default,
    Default: Default_1.default,
    Disbelief: Disbelief_1.default,
    Eating: Eating_1.default,
    Grimace: Grimace_1.default,
    Sad: Sad_1.default,
    ScreamOpen: ScreamOpen_1.default,
    Serious: Serious_1.default,
    Smile: Smile_1.default,
    Tongue: Tongue_1.default,
    Twinkle: Twinkle_1.default,
    Vomit: Vomit_1.default,
};
const Mouth = ({ type }) => {
    const Component = (0, lookup_1.default)(components, type, 'Default');
    return Component ? React.createElement(Component, null) : null;
};
exports.default = Mouth;
