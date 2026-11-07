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
exports.AvatarStyle = void 0;
const React = __importStar(require("react"));
const useUniqueId_1 = __importDefault(require("./useUniqueId"));
const accessories_1 = __importDefault(require("./top/accessories"));
const clothes_1 = __importDefault(require("./clothes"));
const face_1 = __importDefault(require("./face"));
const Skin_1 = __importDefault(require("./Skin"));
const top_1 = __importDefault(require("./top"));
var AvatarStyle;
(function (AvatarStyle) {
    AvatarStyle["Circle"] = "Circle";
    AvatarStyle["Transparent"] = "Transparent";
})(AvatarStyle || (exports.AvatarStyle = AvatarStyle = {}));
const Avatar = ({ avatarStyle, style, className, skinColor, clotheType, clotheColor, graphicType, mouthType, eyeType, eyebrowType, topType, hairColor, hatColor, facialHairType, facialHairColor, accessoriesType }) => {
    const path1 = (0, useUniqueId_1.default)('react-path-');
    const path2 = (0, useUniqueId_1.default)('react-path-');
    const path3 = (0, useUniqueId_1.default)('react-path-');
    const mask1 = (0, useUniqueId_1.default)('react-mask-');
    const mask2 = (0, useUniqueId_1.default)('react-mask-');
    const mask3 = (0, useUniqueId_1.default)('react-mask-');
    const circle = avatarStyle === AvatarStyle.Circle;
    const skinProps = {
        color: skinColor,
        maskID: mask3
    };
    const clotheProps = {
        type: clotheType,
        color: clotheColor,
        graphicType
    };
    const faceProps = {
        mouthType,
        eyeType,
        eyebrowType,
    };
    const topProps = {
        type: topType,
        hairColor,
        hatColor,
        facialHairType,
        facialHairColor
    };
    const accessoriesProps = {
        type: accessoriesType
    };
    return (React.createElement("svg", { style: style, className: className, width: "100%", height: "100%", viewBox: "0 0 264 280", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
        React.createElement("desc", null, "Created with getavataaars.com"),
        React.createElement("defs", null,
            React.createElement("circle", { id: path1, cx: "120", cy: "120", r: "120" }),
            React.createElement("path", { d: "M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z", id: path2 }),
            React.createElement("path", { d: "M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z", id: path3 })),
        React.createElement("g", { id: "Avataaar", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
            React.createElement("g", { transform: "translate(-825.000000, -1100.000000)", id: "Avataaar/Circle" },
                React.createElement("g", { transform: "translate(825.000000, 1100.000000)" },
                    circle ? (React.createElement("g", { id: "Circle", strokeWidth: "1", fillRule: "evenodd", transform: "translate(12.000000, 40.000000)" },
                        React.createElement("mask", { id: mask1, fill: "white" },
                            React.createElement("use", { xlinkHref: '#' + path1 })),
                        React.createElement("use", { id: "Circle-Background", fill: "#E6E6E6", xlinkHref: '#' + path1 }),
                        React.createElement("g", { id: "Color/Palette/Blue-01", mask: 'url(#' + mask1 + ')', fill: "#65C9FF" },
                            React.createElement("rect", { id: "\uD83D\uDD8DColor", x: "0", y: "0", width: "240", height: "240" })))) : null,
                    circle ? (React.createElement("mask", { id: mask2, fill: "white" },
                        React.createElement("use", { xlinkHref: '#' + path2 }))) : null,
                    React.createElement("g", { id: "Mask" }),
                    React.createElement("g", { id: "Avataaar", strokeWidth: "1", fillRule: "evenodd", mask: circle ? 'url(#' + mask2 + ')' : undefined },
                        React.createElement("g", { id: "Body", transform: "translate(32.000000, 36.000000)" },
                            React.createElement("mask", { id: mask3, fill: "white" },
                                React.createElement("use", { xlinkHref: '#' + path3 })),
                            React.createElement("use", { fill: "#D0C6AC", xlinkHref: '#' + path3 }),
                            React.createElement(Skin_1.default, Object.assign({}, skinProps)),
                            React.createElement("path", { d: "M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z", id: "Neck-Shadow", fillOpacity: "0.100000001", fill: "#000000", mask: 'url(#' + mask3 + ')' })),
                        React.createElement(clothes_1.default, Object.assign({}, clotheProps)),
                        React.createElement(face_1.default, Object.assign({}, faceProps)),
                        React.createElement(top_1.default, Object.assign({}, topProps),
                            React.createElement(accessories_1.default, Object.assign({}, accessoriesProps)))))))));
};
exports.default = Avatar;
