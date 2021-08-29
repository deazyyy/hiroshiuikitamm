"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Svg_1 = require("../../components/Svg");
var Text_1 = require("../../components/Text/Text");
var Flex_1 = require("../../components/Flex/Flex");
var Dropdown_1 = require("../../components/Dropdown/Dropdown");
var Link_1 = require("../../components/Link/Link");
var Skeleton_1 = require("../../components/Skeleton/Skeleton");
var Button_1 = require("../../components/Button/Button");
var IconButton_1 = require("../../components/Button/IconButton");
var IconModule = require("./icons");
var config_1 = require("./config");
var Icons = IconModule;
var MoonIcon = Icons.MoonIcon, SunIcon = Icons.SunIcon, LanguageIcon = Icons.LanguageIcon;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled_components_1["default"].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), config_1.MENU_ENTRY_HEIGHT);
var SocialEntry = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), config_1.MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang, priceLink = _a.priceLink;
    if (!isPushed) {
        return (react_1["default"].createElement(Container, null,
            react_1["default"].createElement(IconButton_1["default"], { variant: "text", onClick: function () { return pushNav(true); } },
                react_1["default"].createElement(Svg_1.CogIcon, null))));
    }
    return (react_1["default"].createElement(Container, null,
        react_1["default"].createElement("div", { className: "panelFooter" },
            react_1["default"].createElement("h2", null, "Stake tokens to earn slime"),
            react_1["default"].createElement(Button_1["default"], null, "Go to Pools")),
        react_1["default"].createElement(SocialEntry, null, cakePriceUsd ? (react_1["default"].createElement(PriceLink, { href: priceLink, target: "_blank", style: { margin: "auto" } },
            react_1["default"].createElement(Svg_1.PancakeRoundIcon, { width: "24px", mr: "8px" }),
            react_1["default"].createElement(Text_1["default"], { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (react_1["default"].createElement(Skeleton_1["default"], { width: 80, height: 24 }))),
        react_1["default"].createElement(SettingsEntry, null,
            react_1["default"].createElement(Button_1["default"], { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                react_1["default"].createElement(Flex_1["default"], { alignItems: "center" },
                    react_1["default"].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    react_1["default"].createElement(Text_1["default"], { color: "textDisabled", mx: "4px" }, "/"),
                    react_1["default"].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            react_1["default"].createElement(Flex_1["default"], null, config_1.socials.map(function (social, index) {
                var Icon = Icons[social.icon];
                var iconProps = { width: "24px", color: "lgray", style: { cursor: "pointer" } };
                var mr = index < config_1.socials.length - 1 ? "10px" : 0;
                if (social.items) {
                    return (react_1["default"].createElement(Dropdown_1["default"], { key: social.label, position: "top", target: react_1["default"].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (react_1["default"].createElement(Link_1["default"], { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (react_1["default"].createElement(Link_1["default"], { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    react_1["default"].createElement(Icon, __assign({}, iconProps))));
            })))));
};
exports["default"] = PanelFooter;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
