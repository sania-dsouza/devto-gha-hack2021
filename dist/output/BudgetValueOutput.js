"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetValueOutput = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _framework = require("@jovotech/framework");

var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BudgetValueOutput = (_dec = (0, _framework.Output)(), _dec(_class = /*#__PURE__*/function (_BaseOutput) {
  (0, _inherits2["default"])(BudgetValueOutput, _BaseOutput);

  var _super = _createSuper(BudgetValueOutput);

  function BudgetValueOutput() {
    (0, _classCallCheck2["default"])(this, BudgetValueOutput);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(BudgetValueOutput, [{
    key: "build",
    value: function build() {
      return {
        // quickReplies: ['100', '200'],
        listen: {
          entities: {
            // mode: 'REPLACE', // default
            types: {
              "alexa": "AMAZON.US_FIRST_NAME"
            }
          }
        }
      };
    }
  }]);
  return BudgetValueOutput;
}(_framework.BaseOutput)) || _class);
exports.BudgetValueOutput = BudgetValueOutput;