"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.LinkLabel = exports.MenuEntry = void 0;
var styled_components_1 = require("styled-components");
var config_1 = require("./config");
var rainbowAnimation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  } \n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  } \n"])));
var LinkLabel = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n  font-size:13px\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n  font-size:13px\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
exports.LinkLabel = LinkLabel;
var MenuEntry = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  // height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background: ", ";;\n  color: ", ";\n  // box-shadow: ", ";\n  border-radius:12px;\n  margin: 0px 26px 6px;\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: ", ";\n  }\n\n  svg {\n    fill:  ", ";;\n    width:18px\n  }\n\n  &:hover {\n    \n    color:", ";\n    svg {\n      fill:  ", ";\n    }\n    a {\n      color:", ";\n    }\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  // height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background: ", ";;\n  color: ", ";\n  // box-shadow: ", ";\n  border-radius:12px;\n  margin: 0px 26px 6px;\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: ", ";\n  }\n\n  svg {\n    fill:  ", ";;\n    width:18px\n  }\n\n  &:hover {\n    \n    color:", ";\n    svg {\n      fill:  ", ";\n    }\n    a {\n      color:", ";\n    }\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), config_1.MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "7px 32px" : "10px 12px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "12px" : "12px");
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "linear-gradient(-210deg, #007afe 0%, #6f5ffe  40%)" : "transparent");
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "#fff" : theme.colors.lgray);
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "#fff" : theme.colors.lgray);
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "#fff" : theme.colors.lgray);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
exports.MenuEntry = MenuEntry;
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button"
};
var templateObject_1, templateObject_2, templateObject_3;
