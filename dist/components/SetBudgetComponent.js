"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetBudgetComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _framework = require("@jovotech/framework");

var _YesNoOutput = require("../output/YesNoOutput");

var _BudgetValueOutput = require("../output/BudgetValueOutput");

var _dec, _dec2, _dec3, _class, _class2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SetBudgetComponent = (_dec = (0, _framework.Component)(), _dec2 = (0, _framework.Intents)('YesIntent'), _dec3 = (0, _framework.Intents)('NoIntent'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(SetBudgetComponent, _BaseComponent);

  var _super = _createSuper(SetBudgetComponent);

  function SetBudgetComponent() {
    (0, _classCallCheck2["default"])(this, SetBudgetComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SetBudgetComponent, [{
    key: "START",
    value: function START() {
      return this.$send(_YesNoOutput.YesNoOutput, {
        message: 'Welcome to your finance app! Do you want to set a budget ?'
      });
    }
  }, {
    key: "whatBudget",
    value: function whatBudget() {
      return this.$send({
        message: 'Ok, what do you want to set your budget to?'
      });
    }
  }, {
    key: "dontSetBudget",
    value: function dontSetBudget() {
      this.$entities.budget = '200';
      return this.$send({
        message: "I will continue with the current budget: " + this.$entities.budget
      });
    } // UNHANDLED() {
    //   return this.START();
    // }

  }]);
  return SetBudgetComponent;
}(_framework.BaseComponent), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "whatBudget", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "whatBudget"), _class2.prototype), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "dontSetBudget", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "dontSetBudget"), _class2.prototype)), _class2)) || _class);
exports.SetBudgetComponent = SetBudgetComponent;