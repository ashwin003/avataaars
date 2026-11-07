"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const clothes_1 = __importDefault(require("./clothes"));
const Graphics_1 = __importDefault(require("./clothes/Graphics"));
const accessories_1 = __importDefault(require("./top/accessories"));
const facialHair_1 = __importDefault(require("./top/facialHair"));
const top_1 = __importDefault(require("./top"));
const eyes_1 = __importDefault(require("./face/eyes"));
const eyebrow_1 = __importDefault(require("./face/eyebrow"));
const mouth_1 = __importDefault(require("./face/mouth"));
const nose_1 = __importDefault(require("./face/nose"));
const Skin_1 = __importDefault(require("./Skin"));
const PieceComponent = ({ style, skinColor, clotheType, clotheColor, graphicType, mouthType, eyeType, eyebrowType, topType, hairColor, hatColor, facialHairType, facialHairColor, accessoriesType, viewBox, pieceType, pieceSize }) => {
    const size = pieceSize ? `${pieceSize}px` : '100%';
    return React.createElement("svg", { style: style, width: size, height: size, viewBox: viewBox || "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        pieceType === 'top' && React.createElement(top_1.default, { type: topType, hairColor: hairColor, hatColor: hatColor, facialHairType: facialHairType, facialHairColor: facialHairColor }),
        pieceType === 'clothe' && React.createElement(clothes_1.default, { type: clotheType, color: clotheColor, graphicType: graphicType }),
        pieceType === 'graphics' && React.createElement(Graphics_1.default, { maskID: "1234", type: graphicType }),
        (pieceType === 'accessories' || pieceType === 'accesories') && React.createElement(accessories_1.default, { type: accessoriesType }),
        pieceType === 'facialHair' && React.createElement(facialHair_1.default, { type: facialHairType, color: facialHairColor }),
        pieceType === 'eyes' && React.createElement(eyes_1.default, { type: eyeType }),
        pieceType === 'eyebrows' && React.createElement(eyebrow_1.default, { type: eyebrowType }),
        pieceType === 'mouth' && React.createElement(mouth_1.default, { type: mouthType }),
        pieceType === 'nose' && React.createElement(nose_1.default, null),
        pieceType === 'skin' && React.createElement(Skin_1.default, { color: skinColor, maskID: "5678" }));
};
exports.default = PieceComponent;
