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
var Common_1 = require('./Common');
var Feature = function () {
  var Title = Common_1.component.Title,
    Header = Common_1.component.Header;
  return react_1['default'].createElement(
    Main,
    null,
    react_1['default'].createElement(
      Header,
      null,
      react_1['default'].createElement(Title, null, '\u7FA4\u4F53\u7279\u5F81'),
    ),
  );
};
var Main = styled_1['default'].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  position: relative;\n'],
      ['\n  position: relative;\n'],
    )),
);
exports['default'] = Feature;
var templateObject_1;
