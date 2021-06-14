'use strict';
exports.__esModule = true;
var react_1 = require('react');
var react_dom_1 = require('react-dom');
var App_1 = require('./App');
require('./index.css');
react_dom_1['default'].render(
  react_1['default'].createElement(
    react_1['default'].StrictMode,
    null,
    react_1['default'].createElement(App_1['default'], null),
  ),
  document.getElementById('root'),
);
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
