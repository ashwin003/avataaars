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
const Angry_1 = __importDefault(require("./Angry"));
const AngryNatural_1 = __importDefault(require("./AngryNatural"));
const Default_1 = __importDefault(require("./Default"));
const DefaultNatural_1 = __importDefault(require("./DefaultNatural"));
const FlatNatural_1 = __importDefault(require("./FlatNatural"));
const FrownNatural_1 = __importDefault(require("./FrownNatural"));
const RaisedExcited_1 = __importDefault(require("./RaisedExcited"));
const RaisedExcitedNatural_1 = __importDefault(require("./RaisedExcitedNatural"));
const SadConcerned_1 = __importDefault(require("./SadConcerned"));
const SadConcernedNatural_1 = __importDefault(require("./SadConcernedNatural"));
const UnibrowNatural_1 = __importDefault(require("./UnibrowNatural"));
const UpDown_1 = __importDefault(require("./UpDown"));
const UpDownNatural_1 = __importDefault(require("./UpDownNatural"));
const components = {
    Angry: Angry_1.default,
    AngryNatural: AngryNatural_1.default,
    Default: Default_1.default,
    DefaultNatural: DefaultNatural_1.default,
    FlatNatural: FlatNatural_1.default,
    FrownNatural: FrownNatural_1.default,
    RaisedExcited: RaisedExcited_1.default,
    RaisedExcitedNatural: RaisedExcitedNatural_1.default,
    SadConcerned: SadConcerned_1.default,
    SadConcernedNatural: SadConcernedNatural_1.default,
    UnibrowNatural: UnibrowNatural_1.default,
    UpDown: UpDown_1.default,
    UpDownNatural: UpDownNatural_1.default,
};
const Eyebrow = ({ type }) => {
    const Component = (0, lookup_1.default)(components, type, 'Default');
    return Component ? React.createElement(Component, null) : null;
};
exports.default = Eyebrow;
