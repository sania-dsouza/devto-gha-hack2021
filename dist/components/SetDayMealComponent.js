"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetDayMealComponent = void 0;

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

var _MiddayOutput = require("../output/MiddayOutput");

var _LunchOutput = require("../output/LunchOutput");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SetDayMealComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('YesIntent'), _dec3 = (0, _framework.Intents)('NoIntent'), _dec4 = (0, _framework.Intents)('SetBreakfastIntent'), _dec5 = (0, _framework.Intents)('SetMiddayIntent'), _dec6 = (0, _framework.Intents)('SetLunchIntent'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(SetDayMealComponent, _BaseComponent);

  var _super = _createSuper(SetDayMealComponent);

  function SetDayMealComponent() {
    (0, _classCallCheck2["default"])(this, SetDayMealComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SetDayMealComponent, [{
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
        message: 'Ok, today is ' + (0, _moment["default"])().format('Do MMM YYYY') + '. What did you eat for breakfast?'
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
    key: "setMidday",
    value: function setMidday() {
      return this.$send(_MiddayOutput.MiddayOutput, {
        message: 'Oh healthy you! And mid-day snack?'
      });
    }
  }, {
    key: "setLunch",
    value: function setLunch() {
      return this.$send(_LunchOutput.LunchOutput, {
        message: 'Great! What was lunch like?'
      });
    }
  }, {
    key: "finishDayMeal",
    value: function finishDayMeal() {
      return this.$send({
        message: 'I have saved your day meal for ' + (0, _moment["default"])().format('Do MMM YYYY') + '.'
      });
    } // UNHANDLED() {
    //   return this.START();
    // }

  }]);
  return SetDayMealComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "setCalIntake", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "setCalIntake"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "dontSetCalIntake", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "dontSetCalIntake"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "setMidday", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "setMidday"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "setLunch", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "setLunch"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "finishDayMeal", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "finishDayMeal"), _class2.prototype)), _class2)) || _class);
exports.SetDayMealComponent = SetDayMealComponent;