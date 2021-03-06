"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _emotion = require("emotion");

var _menu = _interopRequireDefault(require("@react-website-themes/classy-docs/components/../styles/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Menu = function Menu(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _menu.default : _props$themeStyle,
      _props$customStyle = props.customStyle,
      customStyle = _props$customStyle === void 0 ? '' : _props$customStyle;
  return _react.default.createElement("nav", {
    className: (0, _emotion.cx)(themeStyle, customStyle)
  }, _react.default.createElement("ul", null, items.map(function (item) {


    var label = item.label,
        to = item.to,
        Icon = item.icon,
        linkProps = item.linkProps;

    const internal = /^\/(?!\/)/.test(to);
    
    if (internal) {   
    return _react.default.createElement("li", {
      key: label
    }, _react.default.createElement(_gatsby.Link, _extends({
      to: to,
      activeClassName: "active"
    }, linkProps), Icon && _react.default.createElement(Icon, null), _react.default.createElement("span", null, label))); }
      return _react.default.createElement("li", {
        key: label
      }, _react.default.createElement("a", _extends({
        href: to,
        activeClassName: "active"
      }, linkProps), Icon && _react.default.createElement(Icon, null), _react.default.createElement("span", null, label))); 
  })));
};

Menu.propTypes = {
  items: _propTypes.default.array.isRequired,
  themeStyle: _propTypes.default.string,
  customStyle: _propTypes.default.string
};
var _default = Menu;
exports.default = _default;