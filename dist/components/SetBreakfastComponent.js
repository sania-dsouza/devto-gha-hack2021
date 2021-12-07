"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetBreakfastComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _moment = _interopRequireDefault(require("moment"));

var _YesNoOutput = require("../output/YesNoOutput");

var _BreakfastOutput = require("../output/BreakfastOutput");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SetBreakfastComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('YesIntent'), _dec3 = (0, _framework.Intents)('NoIntent'), _dec4 = (0, _framework.Intents)('SetBreakfastIntent'), _dec5 = (0, _framework.Intents)('SetBreakfastIntent'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(SetBreakfastComponent, _BaseComponent);

  var _super = _createSuper(SetBreakfastComponent);

  function SetBreakfastComponent() {
    (0, _classCallCheck2["default"])(this, SetBreakfastComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SetBreakfastComponent, [{
    key: "START",
    value: function START() {
      return this.$send(_YesNoOutput.YesNoOutput, {
        message: 'Welcome to NutriPlanner app! Do you want to save your cal intake today?'
      });
    }
  }, {
    key: "setCalIntake",
    value: function setCalIntake() {
      return this.$send(_BreakfastOutput.BreakfastOutput, {
        message: 'Ok, today is ' + (0, _moment["default"])().format("Do MMM YYYY") + '. What did you eat for breakfast?'
      });
    }
  }, {
    key: "dontSetCalIntake",
    value: function dontSetCalIntake() {
      return this.$send({
        message: 'Alright! You can invoke me again by saying "Alexa, open jovo test" '
      });
    }
  }, {
    key: "setBreakfast",
    value: function setBreakfast() {
      return this.$send(MiddayOutput, {
        message: 'What about your mid-day snack?'
      });
    } // UNHANDLED() {
    //   return this.START();
    // }

  }]);
  return SetBreakfastComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "setCalIntake", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "setCalIntake"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "dontSetCalIntake", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "dontSetCalIntake"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "setBreakfast", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "setBreakfast"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "setBreakfast", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "setBreakfast"), _class2.prototype)), _class2)) || _class);
exports.SetBreakfastComponent = SetBreakfastComponent;