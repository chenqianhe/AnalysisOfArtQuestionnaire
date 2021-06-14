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
var Common_1 = require('./Common');
var styled_1 = require('@emotion/styled');
var downArrow_png_1 = require('./assets/downArrow.png');
var Charactor = function () {
  var Title = Common_1.component.Title,
    Header = Common_1.component.Header;
  return react_1['default'].createElement(
    Main,
    null,
    react_1['default'].createElement(
      Header,
      null,
      react_1['default'].createElement(Title, null, '\u89D2\u8272\u5173\u7CFB'),
      react_1['default'].createElement(DownButton, null),
    ),
  );
};
var Main = styled_1['default'].div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ['\n  position: relative;\n  background: ', ';\n'],
      ['\n  position: relative;\n  background: ', ';\n'],
    )),
  Common_1.color.background,
);
var DownButton = function () {
  var _a = react_1.useState(false),
    showExample = _a[0],
    setShowExample = _a[1];
  return react_1['default'].createElement(
    DownButtonBlock,
    {
      onClick: function () {
        return setShowExample(!showExample);
      },
    },
    react_1['default'].createElement(DownArrowImg, {
      src: downArrow_png_1['default'],
      isDown: !showExample,
    }),
    react_1['default'].createElement(Example, null),
  );
};
var DownButtonBlock = styled_1['default'].div(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  width: 4.6vmin;\n  height: 4.6vmin;\n  border-radius: 1vmin;\n  background: ',
        ';\n  display: flex;\n  align-items:center;\n  justify-content:center;\n  cursor: pointer;\n  position: relative;\n',
      ],
      [
        '\n  width: 4.6vmin;\n  height: 4.6vmin;\n  border-radius: 1vmin;\n  background: ',
        ';\n  display: flex;\n  align-items:center;\n  justify-content:center;\n  cursor: pointer;\n  position: relative;\n',
      ],
    )),
  Common_1.color.btnBackground,
);
var DownArrowImg = styled_1['default'].img(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  width: 32%;\n  height: 16%;\n  transition: 0.5s;\n  transform: ',
        ';\n',
      ],
      [
        '\n  width: 32%;\n  height: 16%;\n  transition: 0.5s;\n  transform: ',
        ';\n',
      ],
    )),
  function (_a) {
    var isDown = _a.isDown;
    return isDown ? 'none' : 'rotate(180deg)';
  },
);
var Example = function () {
  var preventDefault = function (e) {
    e.stopPropagation();
  };
  var data = [
    {
      text: '年级[大一-大四]',
    },
  ];
  return react_1['default'].createElement(ExampleLayout, {
    onClick: preventDefault,
  });
};
var ExampleLayout = styled_1['default'].div(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  position: absolute;\n  min-width: 100px;\n  min-height: 100px;\n  bottom: 0;\n  right: 0;\n  width: 26.7vw;\n  padding: 4.5vh 2.9vh;\n  background: white;\n  transform: translateY(calc(100% + 2.6vh));\n  border-radius: 24px;\n  cursor: default;\n  display: flex;\n  flex-direction: column;\n',
      ],
      [
        '\n  position: absolute;\n  min-width: 100px;\n  min-height: 100px;\n  bottom: 0;\n  right: 0;\n  width: 26.7vw;\n  padding: 4.5vh 2.9vh;\n  background: white;\n  transform: translateY(calc(100% + 2.6vh));\n  border-radius: 24px;\n  cursor: default;\n  display: flex;\n  flex-direction: column;\n',
      ],
    )),
);
var ExampleBlock = styled_1['default'].div(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      [
        '\n  height: 5.7vh;\n  margin-top: 2.2vh;\n  :first-of-type{\n    margin-top: 0;\n  }\n  display: flex;\n',
      ],
      [
        '\n  height: 5.7vh;\n  margin-top: 2.2vh;\n  :first-of-type{\n    margin-top: 0;\n  }\n  display: flex;\n',
      ],
    )),
);
var ExampleText = styled_1['default'].div(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      ['\n  width: 65%;\n'],
      ['\n  width: 65%;\n'],
    )),
);
exports['default'] = Charactor;
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;
