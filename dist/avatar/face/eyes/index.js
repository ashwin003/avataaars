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
const Close_1 = __importDefault(require("./Close"));
const Cry_1 = __importDefault(require("./Cry"));
const Default_1 = __importDefault(require("./Default"));
const Dizzy_1 = __importDefault(require("./Dizzy"));
const EyeRoll_1 = __importDefault(require("./EyeRoll"));
const Happy_1 = __importDefault(require("./Happy"));
const Hearts_1 = __importDefault(require("./Hearts"));
const Side_1 = __importDefault(require("./Side"));
const Squint_1 = __importDefault(require("./Squint"));
const Surprised_1 = __importDefault(require("./Surprised"));
const Wink_1 = __importDefault(require("./Wink"));
const WinkWacky_1 = __importDefault(require("./WinkWacky"));
const components = {
    Close: Close_1.default,
    Cry: Cry_1.default,
    Default: Default_1.default,
    Dizzy: Dizzy_1.default,
    EyeRoll: EyeRoll_1.default,
    Happy: Happy_1.default,
    Hearts: Hearts_1.default,
    Side: Side_1.default,
    Squint: Squint_1.default,
    Surprised: Surprised_1.default,
    Wink: Wink_1.default,
    WinkWacky: WinkWacky_1.default,
};
const Eyes = ({ type }) => {
    const Component = (0, lookup_1.default)(components, type, 'Default');
    return Component ? React.createElement(Component, null) : null;
};
exports.default = Eyes;
