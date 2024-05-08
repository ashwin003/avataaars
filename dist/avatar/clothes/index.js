"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var BlazerShirt_1 = require("./BlazerShirt");
var BlazerSweater_1 = require("./BlazerSweater");
var CollarSweater_1 = require("./CollarSweater");
var GraphicShirt_1 = require("./GraphicShirt");
var Hoodie_1 = require("./Hoodie");
var Overall_1 = require("./Overall");
var ShirtCrewNeck_1 = require("./ShirtCrewNeck");
var ShirtScoopNeck_1 = require("./ShirtScoopNeck");
var ShirtVNeck_1 = require("./ShirtVNeck");
var Clothes = function (_a) {
    var type = _a.type, color = _a.color, graphicType = _a.graphicType;
    if (!type)
        return React.createElement(BlazerShirt_1.default, { key: 'BlazerShirt' });
    return {
        'BlazerShirt': React.createElement(BlazerShirt_1.default, { key: 'BlazerShirt' }),
        'BlazerSweater': React.createElement(BlazerSweater_1.default, { key: 'BlazerSweater' }),
        'CollarSweater': React.createElement(CollarSweater_1.default, { key: 'CollarSweater', color: color }),
        'GraphicShirt': React.createElement(GraphicShirt_1.default, { key: 'GraphicShirt', color: color, type: graphicType }),
        'Hoodie': React.createElement(Hoodie_1.default, { key: 'Hoodie', color: color }),
        'Overall': React.createElement(Overall_1.default, { key: 'Overall', color: color }),
        'ShirtCrewNeck': React.createElement(ShirtCrewNeck_1.default, { key: 'ShirtCrewNeck', color: color }),
        'ShirtScoopNeck': React.createElement(ShirtScoopNeck_1.default, { key: 'ShirtScoopNeck', color: color }),
        'ShirtVNeck': React.createElement(ShirtVNeck_1.default, { key: 'ShirtVNeck', color: color })
    }[type];
};
exports.default = Clothes;
