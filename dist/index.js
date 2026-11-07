"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = exports.AvatarStyle = exports.Avatar = void 0;
const avatar_1 = __importDefault(require("./avatar"));
var avatar_2 = require("./avatar");
Object.defineProperty(exports, "Avatar", { enumerable: true, get: function () { return __importDefault(avatar_2).default; } });
Object.defineProperty(exports, "AvatarStyle", { enumerable: true, get: function () { return avatar_2.AvatarStyle; } });
var Piece_1 = require("./Piece");
Object.defineProperty(exports, "Piece", { enumerable: true, get: function () { return Piece_1.Piece; } });
exports.default = avatar_1.default;
