"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ColorComponent = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    return (React.createElement("g", { id: 'Hair/\uD83D\uDC76\uD83C\uDFFD-03-Brown', mask: "url(#".concat(maskID, ")"), fill: color },
        React.createElement("g", { transform: 'translate(0.000000, 0.000000) ', id: 'Color' },
            React.createElement("rect", { x: '0', y: '0', width: '264', height: '280' }))));
};
var HairColor = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    if (!color)
        return React.createElement(ColorComponent, { maskID: maskID, key: 'BrownDark', color: '#4A312C' });
    return {
        'Auburn': React.createElement(ColorComponent, { maskID: maskID, key: 'Auburn', color: '#A55728' }),
        'Black': React.createElement(ColorComponent, { maskID: maskID, key: 'Black', color: '#2C1B18' }),
        'Blonde': React.createElement(ColorComponent, { maskID: maskID, key: 'Blonde', color: '#B58143' }),
        'BlondeGolden': React.createElement(ColorComponent, { maskID: maskID, key: 'BlondeGolden', color: '#D6B370' }),
        'Brown': React.createElement(ColorComponent, { maskID: maskID, key: 'Brown', color: '#724133' }),
        'BrownDark': React.createElement(ColorComponent, { maskID: maskID, key: 'BrownDark', color: '#4A312C' }),
        'PastelPink': React.createElement(ColorComponent, { maskID: maskID, key: 'PastelPink', color: '#F59797' }),
        'Blue': React.createElement(ColorComponent, { maskID: maskID, key: 'Blue', color: '#000fdb' }),
        'Platinum': React.createElement(ColorComponent, { maskID: maskID, key: 'Platinum', color: '#ECDCBF' }),
        'Red': React.createElement(ColorComponent, { maskID: maskID, key: 'Red', color: '#C93305' }),
        'SilverGray': React.createElement(ColorComponent, { maskID: maskID, key: 'SilverGray', color: '#E8E1E1' })
    }[color];
};
exports.default = HairColor;
