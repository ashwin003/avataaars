"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarStyle = void 0;
var React = require("react");
var clothes_1 = require("./clothes");
var Graphics_1 = require("./clothes/Graphics");
var accessories_1 = require("./top/accessories");
var facialHair_1 = require("./top/facialHair");
var top_1 = require("./top");
var eyes_1 = require("./face/eyes");
var eyebrow_1 = require("./face/eyebrow");
var mouth_1 = require("./face/mouth");
var nose_1 = require("./face/nose");
var Skin_1 = require("./Skin");
var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["Circle"] = "Circle";
    AvatarStyle["Transparent"] = "Transparent";
})(AvatarStyle || (exports.AvatarStyle = AvatarStyle = {}));
var PieceComponent = function (_a) {
    var style = _a.style, skinColor = _a.skinColor, clotheType = _a.clotheType, clotheColor = _a.clotheColor, graphicType = _a.graphicType, mouthType = _a.mouthType, eyeType = _a.eyeType, eyebrowType = _a.eyebrowType, topType = _a.topType, hairColor = _a.hairColor, facialHairType = _a.facialHairType, facialHairColor = _a.facialHairColor, accessoriesType = _a.accessoriesType, viewBox = _a.viewBox, pieceType = _a.pieceType;
    var skinProps = {
        color: skinColor,
        maskID: '5678'
    };
    var clotheProps = {
        type: clotheType,
        color: clotheColor,
        graphicType: graphicType
    };
    var topProps = {
        type: topType,
        hairColor: hairColor,
        facialHairType: facialHairType,
        facialHairColor: facialHairColor
    };
    var accessoriesProps = {
        type: accessoriesType
    };
    return React.createElement("svg", { style: style, width: '100%', height: '100%', viewBox: viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        pieceType === 'top' && React.createElement(top_1.default, __assign({}, topProps)),
        pieceType === 'clothe' && React.createElement(clothes_1.default, __assign({}, clotheProps)),
        pieceType === 'graphics' && React.createElement(Graphics_1.default, { maskID: "1234" }),
        (pieceType === 'accessories' || pieceType === 'accesories') && React.createElement(accessories_1.default, __assign({}, accessoriesProps)),
        pieceType === 'facialHair' && React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
        pieceType === 'eyes' && React.createElement(eyes_1.default, { type: eyeType }),
        pieceType === 'eyebrows' && React.createElement(eyebrow_1.default, { type: eyebrowType }),
        pieceType === 'mouth' && React.createElement(mouth_1.default, { type: mouthType }),
        pieceType === 'nose' && React.createElement(nose_1.default, null),
        pieceType === 'skin' && React.createElement(Skin_1.default, __assign({}, skinProps)));
};
exports.default = PieceComponent;
