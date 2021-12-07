"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _framework = require("@jovotech/framework");

var _SetDayMealComponent = require("../../dist/components/SetDayMealComponent");

var _dec, _dec2, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/*
|--------------------------------------------------------------------------
| Global Component
|--------------------------------------------------------------------------
|
| The global component handlers can be reached from anywhere in the app
| Learn more here: www.jovo.tech/docs/components#global-components
|
*/
var GlobalComponent = (_dec = (0, _framework.Global)(), _dec2 = (0, _framework.Component)(), _dec(_class = _dec2(_class = /*#__PURE__*/function (_BaseComponent) {
  (0, _inherits2["default"])(GlobalComponent, _BaseComponent);

  var _super = _createSuper(GlobalComponent);

  function GlobalComponent() {
    (0, _classCallCheck2["default"])(this, GlobalComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(GlobalComponent, [{
    key: "LAUNCH",
    value: function LAUNCH() {
      return this.$redirect(_SetDayMealComponent.SetDayMealComponent);
    }
  }]);
  return GlobalComponent;
}(_framework.BaseComponent)) || _class) || _class);
exports.GlobalComponent = GlobalComponent;