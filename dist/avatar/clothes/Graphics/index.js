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
const lookup_1 = __importDefault(require("../../lookup"));
const bat_1 = require("./bat");
const bear_1 = require("./bear");
const cumbia_1 = require("./cumbia");
const deer_1 = require("./deer");
const diamond_1 = require("./diamond");
const hola_1 = require("./hola");
const pizza_1 = require("./pizza");
const resist_1 = require("./resist");
const selena_1 = require("./selena");
const skull_1 = require("./skull");
const skull_outline_1 = require("./skull-outline");
const components = {
    Bat: bat_1.Bat,
    Cumbia: cumbia_1.Cumbia,
    Deer: deer_1.Deer,
    Diamond: diamond_1.Diamond,
    Hola: hola_1.Hola,
    Pizza: pizza_1.Pizza,
    Resist: resist_1.Resist,
    Selena: selena_1.Selena,
    Bear: bear_1.Bear,
    SkullOutline: skull_outline_1.SkullOutline,
    Skull: skull_1.Skull,
};
const Graphics = ({ maskID, type }) => {
    const Component = (0, lookup_1.default)(components, type, 'Skull');
    return Component ? React.createElement(Component, { maskID: maskID }) : null;
};
exports.default = Graphics;
