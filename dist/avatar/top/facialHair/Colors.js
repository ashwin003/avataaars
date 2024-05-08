"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ColorComponent = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    return (React.createElement("g", { id: 'Color/Facial-Hair', mask: "url(#".concat(maskID, ")"), fill: color },
        React.createElement("g", { transform: 'translate(-32.000000, 0.000000)', id: 'Color' },
            React.createElement("rect", { x: '0', y: '0', width: '264', height: '244' }))));
};
var Colors = function (_a) {
    var maskID = _a.maskID, color = _a.color;
    if (!color)
        return React.createElement(ColorComponent, { maskID: maskID, color: '#4A312C', key: 'BrownDark' });
    return {
        'Auburn': React.createElement(ColorComponent, { maskID: maskID, color: '#A55728', key: 'Auburn' }),
        'Black': React.createElement(ColorComponent, { maskID: maskID, color: '#2C1B18', key: 'Black' }),
        'Blonde': React.createElement(ColorComponent, { maskID: maskID, color: '#B58143', key: 'Blonde' }),
        'BlondeGolden': React.createElement(ColorComponent, { maskID: maskID, color: '#D6B370', key: 'BlondeGolden' }),
        'Brown': React.createElement(ColorComponent, { maskID: maskID, color: '#724133', key: 'Brown' }),
        'BrownDark': React.createElement(ColorComponent, { maskID: maskID, color: '#4A312C', key: 'BrownDark' }),
        'Platinum': React.createElement(ColorComponent, { maskID: maskID, color: '#ECDCBF', key: 'Platinum' }),
        'Red': React.createElement(ColorComponent, { maskID: maskID, color: '#C93305', key: 'Red' }),
        'SilverGray': React.createElement(ColorComponent, { maskID: maskID, color: '#E8E1E1', key: 'SilverGray' })
    }[color];
};
exports.default = Colors;
