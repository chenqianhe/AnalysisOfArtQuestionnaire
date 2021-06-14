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
var Feature_1 = require('./Feature');
var Charactor_1 = require('./Charactor');
var FrontPage_1 = require('./FrontPage');
var App = function () {
  // Create the count state.
  // Return the App component.
  return react_1['default'].createElement(
    react_1['default'].Fragment,
    null,
    react_1['default'].createElement(
      Main,
      null,
      react_1['default'].createElement(Feature_1['default'], null),
      react_1['default'].createElement(Charactor_1['default'], null),
    ),
    react_1['default'].createElement(FrontPage_1['default'], null),
  );
};
var Main = styled_1['default'].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  position: fixed;\n  top: 0;\n  display: grid;\n  grid-template-columns: 38% 62%;\n  height: 100vh;\n  width: 100vw;\n',
      ],
      [
        '\n  position: fixed;\n  top: 0;\n  display: grid;\n  grid-template-columns: 38% 62%;\n  height: 100vh;\n  width: 100vw;\n',
      ],
    )),
);
exports['default'] = App;
var templateObject_1;
