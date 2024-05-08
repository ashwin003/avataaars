"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Eyepatch_1 = require("./Eyepatch");
var Hat_1 = require("./Hat");
var Hijab_1 = require("./Hijab");
var LongHairBigHair_1 = require("./LongHairBigHair");
var LongHairBob_1 = require("./LongHairBob");
var LongHairBun_1 = require("./LongHairBun");
var LongHairCurly_1 = require("./LongHairCurly");
var LongHairCurvy_1 = require("./LongHairCurvy");
var LongHairDreads_1 = require("./LongHairDreads");
var LongHairFrida_1 = require("./LongHairFrida");
var LongHairFro_1 = require("./LongHairFro");
var LongHairFroBand_1 = require("./LongHairFroBand");
var LongHairMiaWallace_1 = require("./LongHairMiaWallace");
var LongHairNotTooLong_1 = require("./LongHairNotTooLong");
var LongHairShavedSides_1 = require("./LongHairShavedSides");
var LongHairStraight_1 = require("./LongHairStraight");
var LongHairStraight2_1 = require("./LongHairStraight2");
var LongHairStraightStrand_1 = require("./LongHairStraightStrand");
var NoHair_1 = require("./NoHair");
var ShortHairDreads01_1 = require("./ShortHairDreads01");
var ShortHairDreads02_1 = require("./ShortHairDreads02");
var ShortHairFrizzle_1 = require("./ShortHairFrizzle");
var ShortHairShaggyMullet_1 = require("./ShortHairShaggyMullet");
var ShortHairShortCurly_1 = require("./ShortHairShortCurly");
var ShortHairShortFlat_1 = require("./ShortHairShortFlat");
var ShortHairShortRound_1 = require("./ShortHairShortRound");
var ShortHairShortWaved_1 = require("./ShortHairShortWaved");
var ShortHairSides_1 = require("./ShortHairSides");
var ShortHairTheCaesar_1 = require("./ShortHairTheCaesar");
var ShortHairTheCaesarSidePart_1 = require("./ShortHairTheCaesarSidePart");
var Turban_1 = require("./Turban");
var WinterHat1_1 = require("./WinterHat1");
var WinterHat2_1 = require("./WinterHat2");
var WinterHat3_1 = require("./WinterHat3");
var WinterHat4_1 = require("./WinterHat4");
var Top = function (_a) {
    var children = _a.children, type = _a.type, facialHairColor = _a.facialHairColor, facialHairType = _a.facialHairType;
    if (!type)
        return React.createElement(LongHairStraight_1.default, { key: 'LongHairStraight' }, children);
    return {
        'NoHair': React.createElement(NoHair_1.default, { key: 'NoHair', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'Eyepatch': React.createElement(Eyepatch_1.default, { key: 'Eyepatch' }),
        'Hat': React.createElement(Hat_1.default, { key: 'Hat', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'Hijab': React.createElement(Hijab_1.default, { key: 'Hijab', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'Turban': React.createElement(Turban_1.default, { key: 'Turban', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'WinterHat1': React.createElement(WinterHat1_1.default, { key: 'WinterHat1', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'WinterHat2': React.createElement(WinterHat2_1.default, { key: 'WinterHat2', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'WinterHat3': React.createElement(WinterHat3_1.default, { key: 'WinterHat3', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'WinterHat4': React.createElement(WinterHat4_1.default, { key: 'WinterHat4', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairBigHair': React.createElement(LongHairBigHair_1.default, { key: 'LongHairBigHair', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairBob': React.createElement(LongHairBob_1.default, { key: 'LongHairBob', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairBun': React.createElement(LongHairBun_1.default, { key: 'LongHairBun', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairCurly': React.createElement(LongHairCurly_1.default, { key: 'LongHairCurly', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairCurvy': React.createElement(LongHairCurvy_1.default, { key: 'LongHairCurvy', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairDreads': React.createElement(LongHairDreads_1.default, { key: 'LongHairDreads', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairFrida': React.createElement(LongHairFrida_1.default, { key: 'LongHairFrida', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairFro': React.createElement(LongHairFro_1.default, { key: 'LongHairFro', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairFroBand': React.createElement(LongHairFroBand_1.default, { key: 'LongHairFroBand', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairNotTooLong': React.createElement(LongHairNotTooLong_1.default, { key: 'LongHairNotTooLong', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairShavedSides': React.createElement(LongHairShavedSides_1.default, { key: 'LongHairShavedSides', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairMiaWallace': React.createElement(LongHairMiaWallace_1.default, { key: 'LongHairMiaWallace', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairStraight': React.createElement(LongHairStraight_1.default, { key: 'LongHairStraight', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairStraight2': React.createElement(LongHairStraight2_1.default, { key: 'LongHairStraight2', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'LongHairStraightStrand': React.createElement(LongHairStraightStrand_1.default, { key: 'LongHairStraightStrand', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairDreads01': React.createElement(ShortHairDreads01_1.default, { key: 'ShortHairDreads01', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairDreads02': React.createElement(ShortHairDreads02_1.default, { key: 'ShortHairDreads02', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairFrizzle': React.createElement(ShortHairFrizzle_1.default, { key: 'ShortHairFrizzle', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairShaggyMullet': React.createElement(ShortHairShaggyMullet_1.default, { key: 'ShortHairShaggyMullet', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairShortCurly': React.createElement(ShortHairShortCurly_1.default, { key: 'ShortHairShortCurly', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairShortFlat': React.createElement(ShortHairShortFlat_1.default, { key: 'ShortHairShortFlat', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairShortRound': React.createElement(ShortHairShortRound_1.default, { key: 'ShortHairShortRound', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairShortWaved': React.createElement(ShortHairShortWaved_1.default, { key: 'ShortHairShortWaved', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairSides': React.createElement(ShortHairSides_1.default, { key: 'ShortHairSides', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairTheCaesar': React.createElement(ShortHairTheCaesar_1.default, { key: 'ShortHairTheCaesar', facialHairColor: facialHairColor, facialHairType: facialHairType }, children),
        'ShortHairTheCaesarSidePart': React.createElement(ShortHairTheCaesarSidePart_1.default, { key: 'ShortHairTheCaesarSidePart', facialHairColor: facialHairColor, facialHairType: facialHairType }, children)
    }[type];
};
exports.default = Top;
