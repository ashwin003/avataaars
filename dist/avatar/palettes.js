"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skinColors = exports.hairColors = exports.facialHairColors = exports.fabricColors = void 0;
/** Palette shared by clothes and hats. */
exports.fabricColors = {
    Black: '#262E33',
    Blue01: '#65C9FF',
    Blue02: '#5199E4',
    Blue03: '#25557C',
    Gray01: '#E6E6E6',
    Gray02: '#929598',
    Heather: '#3C4F5C',
    PastelBlue: '#B1E2FF',
    PastelGreen: '#A7FFC4',
    PastelOrange: '#FFDEB5',
    PastelRed: '#FFAFB9',
    PastelYellow: '#FFFFB1',
    Pink: '#FF488E',
    Red: '#FF5C5C',
    White: '#FFFFFF',
};
exports.facialHairColors = {
    Auburn: '#A55728',
    Black: '#2C1B18',
    Blonde: '#B58143',
    BlondeGolden: '#D6B370',
    Brown: '#724133',
    BrownDark: '#4A312C',
    Platinum: '#ECDCBF',
    Red: '#C93305',
    SilverGray: '#E8E1E1',
};
exports.hairColors = Object.assign(Object.assign({}, exports.facialHairColors), { PastelPink: '#F59797', Blue: '#000fdb' });
exports.skinColors = {
    Tanned: '#FD9841',
    Pale: '#FFDBB4',
    Yellow: '#F8D25C',
    Light: '#EDB98A',
    Brown: '#D08B5B',
    DarkBrown: '#AE5D29',
    Black: '#614335',
};
