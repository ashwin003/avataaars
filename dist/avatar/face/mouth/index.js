"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Concerned_1 = require("./Concerned");
var Default_1 = require("./Default");
var Disbelief_1 = require("./Disbelief");
var Eating_1 = require("./Eating");
var Grimace_1 = require("./Grimace");
var Sad_1 = require("./Sad");
var ScreamOpen_1 = require("./ScreamOpen");
var Serious_1 = require("./Serious");
var Smile_1 = require("./Smile");
var Tongue_1 = require("./Tongue");
var Twinkle_1 = require("./Twinkle");
var Vomit_1 = require("./Vomit");
var Mouth = function (_a) {
    var type = _a.type;
    if (!type)
        return React.createElement(Default_1.default, { key: 'Default' });
    return {
        'Concerned': React.createElement(Concerned_1.default, { key: 'Concerned' }),
        'Default': React.createElement(Default_1.default, { key: 'Default' }),
        'Disbelief': React.createElement(Disbelief_1.default, { key: 'Disbelief' }),
        'Eating': React.createElement(Eating_1.default, { key: 'Eating' }),
        'Grimace': React.createElement(Grimace_1.default, { key: 'Grimace' }),
        'Sad': React.createElement(Sad_1.default, { key: 'Sad' }),
        'ScreamOpen': React.createElement(ScreamOpen_1.default, { key: 'ScreamOpen' }),
        'Serious': React.createElement(Serious_1.default, { key: 'Serious' }),
        'Smile': React.createElement(Smile_1.default, { key: 'Smile' }),
        'Tongue': React.createElement(Tongue_1.default, { key: 'Tongue' }),
        'Twinkle': React.createElement(Twinkle_1.default, { key: 'Twinkle' }),
        'Vomit': React.createElement(Vomit_1.default, { key: 'Vomit' })
    }[type];
};
exports.default = Mouth;
