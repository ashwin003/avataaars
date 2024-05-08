"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Close_1 = require("./Close");
var Cry_1 = require("./Cry");
var Default_1 = require("./Default");
var Dizzy_1 = require("./Dizzy");
var EyeRoll_1 = require("./EyeRoll");
var Happy_1 = require("./Happy");
var Hearts_1 = require("./Hearts");
var Side_1 = require("./Side");
var Squint_1 = require("./Squint");
var Surprised_1 = require("./Surprised");
var Wink_1 = require("./Wink");
var WinkWacky_1 = require("./WinkWacky");
var Eyes = function (_a) {
    var type = _a.type;
    if (!type)
        return React.createElement(Default_1.default, { key: 'Default' });
    return {
        'Close': React.createElement(Close_1.default, { key: 'Close' }),
        'Cry': React.createElement(Cry_1.default, { key: 'Cry' }),
        'Default': React.createElement(Default_1.default, { key: 'Default' }),
        'Dizzy': React.createElement(Dizzy_1.default, { key: 'Dizzy' }),
        'EyeRoll': React.createElement(EyeRoll_1.default, { key: 'EyeRoll' }),
        'Happy': React.createElement(Happy_1.default, { key: 'Happy' }),
        'Hearts': React.createElement(Hearts_1.default, { key: 'Hearts' }),
        'Side': React.createElement(Side_1.default, { key: 'Side' }),
        'Squint': React.createElement(Squint_1.default, { key: 'Squint' }),
        'Surprised': React.createElement(Surprised_1.default, { key: 'Surprised' }),
        'Wink': React.createElement(Wink_1.default, { key: 'Wink' }),
        'WinkWacky': React.createElement(WinkWacky_1.default, { key: 'WinkWacky' })
    }[type];
};
exports.default = Eyes;
