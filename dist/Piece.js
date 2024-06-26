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
exports.Piece = void 0;
var React = require("react");
var piece_1 = require("./avatar/piece");
var Piece = function (props) {
    return React.createElement(piece_1.default, __assign({}, props, { avatarStyle: props.avatarStyle }));
};
exports.Piece = Piece;
