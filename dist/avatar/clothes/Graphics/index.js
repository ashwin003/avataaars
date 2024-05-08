"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var bat_1 = require("./bat");
var bear_1 = require("./bear");
var cumbia_1 = require("./cumbia");
var deer_1 = require("./deer");
var diamond_1 = require("./diamond");
var hola_1 = require("./hola");
var pizza_1 = require("./pizza");
var resist_1 = require("./resist");
var selena_1 = require("./selena");
var skull_1 = require("./skull");
var skull_outline_1 = require("./skull-outline");
var Graphics = function (_a) {
    var maskID = _a.maskID, type = _a.type;
    if (!type)
        return react_1.default.createElement(skull_1.Skull, { maskID: maskID, key: 'Skull' });
    return {
        'Bat': react_1.default.createElement(bat_1.Bat, { maskID: maskID, key: 'Bat' }),
        'Cumbia': react_1.default.createElement(cumbia_1.Cumbia, { maskID: maskID, key: 'Cumbia' }),
        'Deer': react_1.default.createElement(deer_1.Deer, { maskID: maskID, key: 'Deer' }),
        'Diamond': react_1.default.createElement(diamond_1.Diamond, { maskID: maskID, key: 'Diamond' }),
        'Hola': react_1.default.createElement(hola_1.Hola, { maskID: maskID, key: 'Hola' }),
        'Pizza': react_1.default.createElement(pizza_1.Pizza, { maskID: maskID, key: 'Pizza' }),
        'Resist': react_1.default.createElement(resist_1.Resist, { maskID: maskID, key: 'Resist' }),
        'Selena': react_1.default.createElement(selena_1.Selena, { maskID: maskID, key: 'Selena' }),
        'Bear': react_1.default.createElement(bear_1.Bear, { maskID: maskID, key: 'Bear' }),
        'SkullOutline': react_1.default.createElement(skull_outline_1.SkullOutline, { maskID: maskID, key: 'SkullOutline' }),
        'Skull': react_1.default.createElement(skull_1.Skull, { maskID: maskID, key: 'Skull' })
    }[type];
};
exports.default = Graphics;
