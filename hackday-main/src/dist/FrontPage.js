'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
exports.__esModule = true;
var react_1 = require('react');
var styled_1 = require('@emotion/styled');
var FrontPage = function () {
  return react_1['default'].createElement(Main, null);
};
var Main = styled_1['default'].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(['\n\n'], ['\n\n'])),
);
exports['default'] = FrontPage;
var templateObject_1;
