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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const lookup_1 = __importDefault(require("../lookup"));
const Eyepatch_1 = __importDefault(require("./Eyepatch"));
const Hat_1 = __importDefault(require("./Hat"));
const Hijab_1 = __importDefault(require("./Hijab"));
const LongHairBigHair_1 = __importDefault(require("./LongHairBigHair"));
const LongHairBob_1 = __importDefault(require("./LongHairBob"));
const LongHairBun_1 = __importDefault(require("./LongHairBun"));
const LongHairCurly_1 = __importDefault(require("./LongHairCurly"));
const LongHairCurvy_1 = __importDefault(require("./LongHairCurvy"));
const LongHairDreads_1 = __importDefault(require("./LongHairDreads"));
const LongHairFrida_1 = __importDefault(require("./LongHairFrida"));
const LongHairFro_1 = __importDefault(require("./LongHairFro"));
const LongHairFroBand_1 = __importDefault(require("./LongHairFroBand"));
const LongHairMiaWallace_1 = __importDefault(require("./LongHairMiaWallace"));
const LongHairNotTooLong_1 = __importDefault(require("./LongHairNotTooLong"));
const LongHairShavedSides_1 = __importDefault(require("./LongHairShavedSides"));
const LongHairStraight_1 = __importDefault(require("./LongHairStraight"));
const LongHairStraight2_1 = __importDefault(require("./LongHairStraight2"));
const LongHairStraightStrand_1 = __importDefault(require("./LongHairStraightStrand"));
const NoHair_1 = __importDefault(require("./NoHair"));
const ShortHairDreads01_1 = __importDefault(require("./ShortHairDreads01"));
const ShortHairDreads02_1 = __importDefault(require("./ShortHairDreads02"));
const ShortHairFrizzle_1 = __importDefault(require("./ShortHairFrizzle"));
const ShortHairShaggyMullet_1 = __importDefault(require("./ShortHairShaggyMullet"));
const ShortHairShortCurly_1 = __importDefault(require("./ShortHairShortCurly"));
const ShortHairShortFlat_1 = __importDefault(require("./ShortHairShortFlat"));
const ShortHairShortRound_1 = __importDefault(require("./ShortHairShortRound"));
const ShortHairShortWaved_1 = __importDefault(require("./ShortHairShortWaved"));
const ShortHairSides_1 = __importDefault(require("./ShortHairSides"));
const ShortHairTheCaesar_1 = __importDefault(require("./ShortHairTheCaesar"));
const ShortHairTheCaesarSidePart_1 = __importDefault(require("./ShortHairTheCaesarSidePart"));
const Turban_1 = __importDefault(require("./Turban"));
const WinterHat1_1 = __importDefault(require("./WinterHat1"));
const WinterHat2_1 = __importDefault(require("./WinterHat2"));
const WinterHat3_1 = __importDefault(require("./WinterHat3"));
const WinterHat4_1 = __importDefault(require("./WinterHat4"));
const components = {
    NoHair: NoHair_1.default,
    Eyepatch: Eyepatch_1.default,
    Hat: Hat_1.default,
    Hijab: Hijab_1.default,
    Turban: Turban_1.default,
    WinterHat1: WinterHat1_1.default,
    WinterHat2: WinterHat2_1.default,
    WinterHat3: WinterHat3_1.default,
    WinterHat4: WinterHat4_1.default,
    LongHairBigHair: LongHairBigHair_1.default,
    LongHairBob: LongHairBob_1.default,
    LongHairBun: LongHairBun_1.default,
    LongHairCurly: LongHairCurly_1.default,
    LongHairCurvy: LongHairCurvy_1.default,
    LongHairDreads: LongHairDreads_1.default,
    LongHairFrida: LongHairFrida_1.default,
    LongHairFro: LongHairFro_1.default,
    LongHairFroBand: LongHairFroBand_1.default,
    LongHairNotTooLong: LongHairNotTooLong_1.default,
    LongHairShavedSides: LongHairShavedSides_1.default,
    LongHairMiaWallace: LongHairMiaWallace_1.default,
    LongHairStraight: LongHairStraight_1.default,
    LongHairStraight2: LongHairStraight2_1.default,
    LongHairStraightStrand: LongHairStraightStrand_1.default,
    ShortHairDreads01: ShortHairDreads01_1.default,
    ShortHairDreads02: ShortHairDreads02_1.default,
    ShortHairFrizzle: ShortHairFrizzle_1.default,
    ShortHairShaggyMullet: ShortHairShaggyMullet_1.default,
    ShortHairShortCurly: ShortHairShortCurly_1.default,
    ShortHairShortFlat: ShortHairShortFlat_1.default,
    ShortHairShortRound: ShortHairShortRound_1.default,
    ShortHairShortWaved: ShortHairShortWaved_1.default,
    ShortHairSides: ShortHairSides_1.default,
    ShortHairTheCaesar: ShortHairTheCaesar_1.default,
    ShortHairTheCaesarSidePart: ShortHairTheCaesarSidePart_1.default,
};
const Top = (_a) => {
    var { type } = _a, props = __rest(_a, ["type"]);
    const Component = (0, lookup_1.default)(components, type, 'LongHairStraight');
    return Component ? React.createElement(Component, Object.assign({}, props)) : null;
};
exports.default = Top;
