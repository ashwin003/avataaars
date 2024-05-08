"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ColorComponent = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    return (React.createElement("g", { id: "Skin/\uD83D\uDC76\uD83C\uDFFD-03-Brown", mask: "url(#".concat(maskID, ")"), fill: color },
        React.createElement("g", { transform: "translate(0.000000, 0.000000)", id: "Color" },
            React.createElement("rect", { x: "0", y: "0", width: "264", height: "280" }))));
};
var Skin = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    if (!color)
        return React.createElement(ColorComponent, { maskID: maskID, color: '#EDB98A', key: 'Light' });
    return {
        'Tanned': React.createElement(ColorComponent, { maskID: maskID, color: '#FD9841', key: 'Tanned' }),
        'Pale': React.createElement(ColorComponent, { maskID: maskID, color: '#FFDBB4', key: 'Pale' }),
        'Yellow': React.createElement(ColorComponent, { maskID: maskID, color: '#F8D25C', key: 'Yellow' }),
        'Light': React.createElement(ColorComponent, { maskID: maskID, color: '#EDB98A', key: 'Light' }),
        'Brown': React.createElement(ColorComponent, { maskID: maskID, color: '#D08B5B', key: 'Brown' }),
        'DarkBrown': React.createElement(ColorComponent, { maskID: maskID, color: '#AE5D29', key: 'DarkBrown' }),
        'Black': React.createElement(ColorComponent, { maskID: maskID, color: '#614335', key: 'Black' })
    }[color];
};
exports.default = Skin;
