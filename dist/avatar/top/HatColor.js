"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ColorComponent = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    return (React.createElement("g", { id: 'Color/Palette/Gray-01', mask: "url(#".concat(maskID, ")"), fillRule: 'evenodd', fill: color },
        React.createElement("rect", { id: '\uD83D\uDD8DColor', x: '0', y: '0', width: '264', height: '280' })));
};
var Colors = function (_a) {
    var maskID = _a.maskID, color = _a.color, defaultColor = _a.defaultColor;
    if (!color)
        return React.createElement(ColorComponent, { maskID: maskID, key: 'Black', color: defaultColor });
    return {
        'Black': React.createElement(ColorComponent, { maskID: maskID, key: 'Black', color: '#262E33' }),
        'Blue01': React.createElement(ColorComponent, { maskID: maskID, key: 'Blue01', color: '#65C9FF' }),
        'Blue02': React.createElement(ColorComponent, { maskID: maskID, key: 'Blue02', color: '#5199E4' }),
        'Blue03': React.createElement(ColorComponent, { maskID: maskID, key: 'Blue03', color: '#25557C' }),
        'Gray01': React.createElement(ColorComponent, { maskID: maskID, key: 'Gray01', color: '#E6E6E6' }),
        'Gray02': React.createElement(ColorComponent, { maskID: maskID, key: 'Gray02', color: '#929598' }),
        'Heather': React.createElement(ColorComponent, { maskID: maskID, key: 'Heather', color: '#3C4F5C' }),
        'PastelBlue': React.createElement(ColorComponent, { maskID: maskID, key: 'PastelBlue', color: '#B1E2FF' }),
        'PastelGreen': React.createElement(ColorComponent, { maskID: maskID, key: 'PastelGreen', color: '#A7FFC4' }),
        'PastelOrange': React.createElement(ColorComponent, { maskID: maskID, key: 'PastelOrange', color: '#FFDEB5' }),
        'PastelRed': React.createElement(ColorComponent, { maskID: maskID, key: 'PastelRed', color: '#FFAFB9' }),
        'PastelYellow': React.createElement(ColorComponent, { maskID: maskID, key: 'PastelYellow', color: '#FFFFB1' }),
        'Pink': React.createElement(ColorComponent, { maskID: maskID, key: 'Pink', color: '#FF488E' }),
        'Red': React.createElement(ColorComponent, { maskID: maskID, key: 'Red', color: '#FF5C5C' }),
        'White': React.createElement(ColorComponent, { maskID: maskID, key: 'White', color: '#FFFFFF' })
    }[color];
};
exports.default = Colors;
