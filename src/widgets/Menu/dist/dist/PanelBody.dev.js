"use strict";

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

exports.__esModule = true;

var react_1 = require("react");

var styled_components_1 = require("styled-components");

var react_router_dom_1 = require("react-router-dom");

var IconModule = require("./icons");

var Accordion_1 = require("./Accordion");

var MenuEntry_1 = require("./MenuEntry");

var MenuLink_1 = require("./MenuLink");

var Icons = IconModule;
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));

var PanelBody = function PanelBody(_a) {
  var isDark = _a.isDark,
      isPushed = _a.isPushed,
      pushNav = _a.pushNav,
      isMobile = _a.isMobile,
      links = _a.links;
  var location = react_router_dom_1.useLocation(); // Close the menu when a user clicks a link on mobile

  var handleClick = isMobile ? function () {
    return pushNav(false);
  } : undefined;
  return react_1["default"].createElement(Container, null, react_1["default"].createElement("img", {
    width: "220",
    height: "78 ",
    src: isDark ? 'images/slime/navw.png' : 'images/slime/navb.png',
    alt: "navimg",
    className: "navlogo"
  }), links.map(function (entry) {
    var Icon = Icons[entry.icon];
    var iconElement = react_1["default"].createElement(Icon, {
      width: "24px",
      mr: "8px"
    });
    var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

    if (entry.items) {
      return react_1["default"].createElement(Accordion_1["default"], {
        key: entry.label,
        isPushed: isPushed,
        pushNav: pushNav,
        icon: iconElement,
        label: entry.label,
        initialOpenState: entry.initialOpenState,
        className: calloutClass + " menulinkouter"
      }, isPushed && entry.items.map(function (item) {
        return react_1["default"].createElement(MenuEntry_1.MenuEntry, {
          key: item.href,
          secondary: true,
          isActive: item.href === location.pathname,
          onClick: handleClick
        }, react_1["default"].createElement(MenuLink_1["default"], {
          target: item.external ? "_blank" : "",
          href: item.href
        }, item.label));
      }));
    }

    return react_1["default"].createElement(MenuEntry_1.MenuEntry, {
      key: entry.label,
      isActive: entry.href === location.pathname,
      className: calloutClass + " menulinkouter"
    }, react_1["default"].createElement(MenuLink_1["default"], {
      target: entry.external ? "_blank" : "",
      href: entry.href,
      onClick: handleClick
    }, iconElement, react_1["default"].createElement(MenuEntry_1.LinkLabel, {
      isPushed: isPushed
    }, entry.label)));
  }));
};

exports["default"] = PanelBody;
var templateObject_1;