"use strict";

var _framework = require("@jovotech/framework");

var _GlobalComponent = require("./components/GlobalComponent");

var _LoveHatePizzaComponent = require("./components/LoveHatePizzaComponent");

var _platformAlexa = require("@jovotech/platform-alexa");

var _SetDayMealComponent = require("./components/SetDayMealComponent");

/*
|--------------------------------------------------------------------------
| APP CONFIGURATION
|--------------------------------------------------------------------------
|
| All relevant components, plugins, and configurations for your Jovo app
| Learn more here: www.jovo.tech/docs/app-config
|
*/
var app = new _framework.App({
  /*
  |--------------------------------------------------------------------------
  | Components
  |--------------------------------------------------------------------------
  |
  | Components contain the Jovo app logic
  | Learn more here: www.jovo.tech/docs/components
  |
  */
  components: [_GlobalComponent.GlobalComponent, _LoveHatePizzaComponent.LoveHatePizzaComponent, _SetDayMealComponent.SetDayMealComponent],

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Includes platforms, database integrations, third-party plugins, and more
  | Learn more here: www.jovo.tech/docs/plugins, www.jovo.tech/marketplace
  |
  */
  plugins: [// Add Jovo plugins here
  new _platformAlexa.AlexaPlatform()],

  /*
  |--------------------------------------------------------------------------
  | Other options
  |--------------------------------------------------------------------------
  |
  | Includes all other configuration options like logging
  | Learn more here: www.jovo.tech/docs/app-config
  |
  */
  logging: true,
  routing: {
    intentMap: {
      'AMAZON.StopIntent': 'END'
    }
  }
});
module.exports = {
  app: app
};