"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var eyebrow_1 = require("./eyebrow");
var eyes_1 = require("./eyes");
var mouth_1 = require("./mouth");
var Default_1 = require("./nose/Default");
var Face = function (_a) {
    var eyeType = _a.eyeType, mouthType = _a.mouthType, eyebrowType = _a.eyebrowType;
    return React.createElement("g", { id: 'Face', transform: 'translate(76.000000, 82.000000)', fill: '#000000' },
        React.createElement(mouth_1.default, { type: mouthType }),
        React.createElement(Default_1.default, null),
        React.createElement(eyes_1.default, { type: eyeType }),
        React.createElement(eyebrow_1.default, { type: eyebrowType }));
};
exports.default = Face;
