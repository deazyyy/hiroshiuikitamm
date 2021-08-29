"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var throttle_1 = require("lodash/throttle");
var Overlay_1 = require("../../components/Overlay/Overlay");
var Flex_1 = require("../../components/Flex");
var hooks_1 = require("../../hooks");
var Logo_1 = require("./Logo");
var Panel_1 = require("./Panel");
var UserBlock_1 = require("./UserBlock");
var config_1 = require("./config");
var Avatar_1 = require("./Avatar");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled_components_1["default"].nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + config_1.MENU_HEIGHT + "px");
}, config_1.MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  // margin-top: ", ";\n  margin-top:18px;\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n  @media (max-width: 1200px) {\n    margin-top:75px;\n  }\n"], ["\n  flex-grow: 1;\n  // margin-top: ", ";\n  margin-top:18px;\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n  @media (max-width: 1200px) {\n    margin-top:75px;\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? config_1.MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? config_1.SIDEBAR_WIDTH_FULL : config_1.SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled_components_1["default"](Overlay_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = hooks_1.useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = react_1.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = react_1.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = react_1.useRef(window.pageYOffset);
    react_1.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle_1["default"](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (react_1["default"].createElement(Wrapper, null,
        react_1["default"].createElement(StyledNav, { showMenu: showMenu, className: "menutopdesk" },
            react_1["default"].createElement(Logo_1["default"], { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            react_1["default"].createElement(Flex_1.Flex, null,
                react_1["default"].createElement(UserBlock_1["default"], { account: account, login: login, logout: logout }),
                profile && react_1["default"].createElement(Avatar_1["default"], { profile: profile }))),
        react_1["default"].createElement(BodyWrapper, null,
            react_1["default"].createElement(Panel_1["default"], { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            react_1["default"].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            react_1["default"].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
exports["default"] = Menu;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
