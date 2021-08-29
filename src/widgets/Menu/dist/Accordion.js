"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var config_1 = require("./config");
var MenuEntry_1 = require("./MenuEntry");
var Svg_1 = require("../../components/Svg");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = react_1.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement(MenuEntry_1.MenuEntry, { onClick: handleClick, className: className },
            icon,
            react_1["default"].createElement(MenuEntry_1.LinkLabel, { isPushed: isPushed }, label),
            isOpen ? react_1["default"].createElement(Svg_1.ArrowDropUpIcon, null) : react_1["default"].createElement(Svg_1.ArrowDropDownIcon, null),
            react_1["default"].createElement("div", { className: "btn_shiny" })),
        react_1["default"].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: react_1["default"].Children.count(children) * config_1.MENU_ENTRY_HEIGHT }, children)));
};
exports["default"] = Accordion;
var templateObject_1, templateObject_2;
