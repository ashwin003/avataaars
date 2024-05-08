"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Blank_1 = require("./Blank");
var Kurt_1 = require("./Kurt");
var Prescription01_1 = require("./Prescription01");
var Prescription02_1 = require("./Prescription02");
var Round_1 = require("./Round");
var Sunglasses_1 = require("./Sunglasses");
var Wayfarers_1 = require("./Wayfarers");
var Accessories = function (_a) {
    var type = _a.type;
    if (!type)
        return React.createElement(Blank_1.default, { key: 'Blank' });
    return {
        'Blank': React.createElement(Blank_1.default, { key: 'Blank' }),
        'Kurt': React.createElement(Kurt_1.default, { key: 'Kurt' }),
        'Prescription01': React.createElement(Prescription01_1.default, { key: 'Prescription01' }),
        'Prescription02': React.createElement(Prescription02_1.default, { key: 'Prescription02' }),
        'Round': React.createElement(Round_1.default, { key: 'Round' }),
        'Sunglasses': React.createElement(Sunglasses_1.default, { key: 'Sunglasses' }),
        'Wayfarers': React.createElement(Wayfarers_1.default, { key: 'Wayfarers' })
    }[type];
};
exports.default = Accessories;
