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
exports.component = exports.color = void 0;
var styled_1 = require('@emotion/styled');
var Title = styled_1['default'].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  font-size: 3.3vmin;\n  height: 4.6vmin;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n',
      ],
      [
        '\n  font-size: 3.3vmin;\n  height: 4.6vmin;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n',
      ],
    )),
);
var Header = styled_1['default'].div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  height: 11vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 0 8vh;\n',
      ],
      [
        '\n  height: 11vh;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 0 8vh;\n',
      ],
    )),
);
exports.color = {
  background: '#f6f7fa',
  btnBackground: '#1b44f3',
};
exports.component = {
  Title: Title,
  Header: Header,
};
var templateObject_1, templateObject_2;
