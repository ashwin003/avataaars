"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selector = void 0;
var React = require("react");
var Selector = function (_a) {
    var selectedKey = _a.selectedKey, defaultKey = _a.defaultKey, children = _a.children;
    var selectedChild = React.useMemo(function () { return React.Children.toArray(children).find(function (child) { return React.isValidElement(child) && child.key === selectedKey; }); }, [selectedKey]);
    var defaultChild = React.useMemo(function () { return React.Children.toArray(children).find(function (child) { return React.isValidElement(child) && child.key === defaultKey; }); }, []);
    return selectedChild || defaultChild || null;
};
exports.Selector = Selector;
