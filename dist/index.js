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
exports.Piece = exports.AvatarStyle = exports.Avatar = void 0;
var React = require("react");
var avatar_1 = require("./avatar");
var avatar_2 = require("./avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return avatar_2.default; } });
Object.defineProperty(exports, "AvatarStyle", { enumerable: true, get: function () { return avatar_2.AvatarStyle; } });
var Piece_1 = require("./Piece");
Object.defineProperty(exports, "Piece", { enumerable: true, get: function () { return Piece_1.Piece; } });
var AvatarComponent = function (props) {
    return React.createElement(avatar_1.default, __assign({}, props, { avatarStyle: props.avatarStyle }));
};
exports.default = AvatarComponent;
