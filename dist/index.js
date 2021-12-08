"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var handler = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            response = {
              statusCode: 200,
              body: JSON.stringify('Hello from my jovo Alexa skill app\'s AWS Lambda Function!')
            };
            return _context.abrupt("return", response);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handler() {
    return _ref.apply(this, arguments);
  };
}();

exports.handler = handler;