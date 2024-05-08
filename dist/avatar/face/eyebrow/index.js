"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Angry_1 = require("./Angry");
var AngryNatural_1 = require("./AngryNatural");
var Default_1 = require("./Default");
var DefaultNatural_1 = require("./DefaultNatural");
var FlatNatural_1 = require("./FlatNatural");
var RaisedExcited_1 = require("./RaisedExcited");
var RaisedExcitedNatural_1 = require("./RaisedExcitedNatural");
var SadConcerned_1 = require("./SadConcerned");
var SadConcernedNatural_1 = require("./SadConcernedNatural");
var UnibrowNatural_1 = require("./UnibrowNatural");
var UpDown_1 = require("./UpDown");
var UpDownNatural_1 = require("./UpDownNatural");
var Eyebrow = function (_a) {
    var type = _a.type;
    if (!type)
        return React.createElement(Default_1.default, { key: 'Default' });
    return {
        'Angry': React.createElement(Angry_1.default, { key: 'Angry' }),
        'AngryNatural': React.createElement(AngryNatural_1.default, { key: 'AngryNatural' }),
        'Default': React.createElement(Default_1.default, { key: 'Default' }),
        'DefaultNatural': React.createElement(DefaultNatural_1.default, { key: 'DefaultNatural' }),
        'FlatNatural': React.createElement(FlatNatural_1.default, { key: 'FlatNatural' }),
        'RaisedExcited': React.createElement(RaisedExcited_1.default, { key: 'RaisedExcited' }),
        'RaisedExcitedNatural': React.createElement(RaisedExcitedNatural_1.default, { key: 'RaisedExcitedNatural' }),
        'SadConcerned': React.createElement(SadConcerned_1.default, { key: 'SadConcerned' }),
        'SadConcernedNatural': React.createElement(SadConcernedNatural_1.default, { key: 'SadConcernedNatural' }),
        'UnibrowNatural': React.createElement(UnibrowNatural_1.default, { key: 'UnibrowNatural' }),
        'UpDown': React.createElement(UpDown_1.default, { key: 'UpDown' }),
        'UpDownNatural': React.createElement(UpDownNatural_1.default, { key: 'UpDownNatural' })
    }[type];
};
exports.default = Eyebrow;
