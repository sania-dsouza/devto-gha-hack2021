"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoveHatePizzaComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _YesNoOutput = require("../output/YesNoOutput");

var _dec, _dec2, _dec3, _class, _class2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
|
| A component consists of handlers that respond to specific user requests
| Learn more here: www.jovo.tech/docs/components, jovo.tech/docs/handlers
|
*/
var LoveHatePizzaComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('YesIntent'), _dec3 = (0, _framework.Intents)('NoIntent'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(LoveHatePizzaComponent, _BaseComponent);

  var _super = _createSuper(LoveHatePizzaComponent);

  function LoveHatePizzaComponent() {
    (0, _classCallCheck2["default"])(this, LoveHatePizzaComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LoveHatePizzaComponent, [{
    key: "START",
    value: function START() {
      return this.$send(_YesNoOutput.YesNoOutput, {
        message: 'Do you like Pizza?'
      });
    }
  }, {
    key: "lovesPizza",
    value: function lovesPizza() {
      return this.$send({
        message: 'Yes! I love pizza, too.'
      });
    }
  }, {
    key: "hatesPizza",
    value: function hatesPizza() {
      return this.$send({
        message: "That's OK! Not everyone likes pizza."
      });
    }
  }, {
    key: "UNHANDLED",
    value: function UNHANDLED() {
      return this.START();
    }
  }]);
  return LoveHatePizzaComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "lovesPizza", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "lovesPizza"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "hatesPizza", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "hatesPizza"), _class2.prototype)), _class2)) || _class);
exports.LoveHatePizzaComponent = LoveHatePizzaComponent;