"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BeardLight_1 = require("./BeardLight");
var BeardMajestic_1 = require("./BeardMajestic");
var BeardMedium_1 = require("./BeardMedium");
var Blank_1 = require("./Blank");
var MoustacheFancy_1 = require("./MoustacheFancy");
var MoustacheMagnum_1 = require("./MoustacheMagnum");
var FacialHair = function (_a) {
    var type = _a.type, color = _a.color;
    if (!type)
        return React.createElement(Blank_1.default, { key: 'Blank' });
    return {
        'Blank': React.createElement(Blank_1.default, { key: 'Blank' }),
        'BeardMedium': React.createElement(BeardMedium_1.default, { key: 'BeardMedium', color: color }),
        'BeardLight': React.createElement(BeardLight_1.default, { key: 'BeardLight', color: color }),
        'BeardMajestic': React.createElement(BeardMajestic_1.default, { key: 'BeardMajestic', color: color }),
        'MoustacheFancy': React.createElement(MoustacheFancy_1.default, { key: 'MoustacheFancy', color: color }),
        'MoustacheMagnum': React.createElement(MoustacheMagnum_1.default, { key: 'MoustacheMagnum', color: color })
    }[type];
};
exports.default = FacialHair;
