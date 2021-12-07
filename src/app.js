import { App } from '@jovotech/framework';
import { GlobalComponent } from './components/GlobalComponent';
import { LoveHatePizzaComponent } from './components/LoveHatePizzaComponent';
import { AlexaPlatform } from '@jovotech/platform-alexa';
import { SetDayMealComponent } from './components/SetDayMealComponent';

/*
|--------------------------------------------------------------------------
| APP CONFIGURATION
|--------------------------------------------------------------------------
|
| All relevant components, plugins, and configurations for your Jovo app
| Learn more here: www.jovo.tech/docs/app-config
|
*/
const app = new App({
  /*
  |--------------------------------------------------------------------------
  | Components
  |--------------------------------------------------------------------------
  |
  | Components contain the Jovo app logic
  | Learn more here: www.jovo.tech/docs/components
  |
  */
  components: [GlobalComponent, LoveHatePizzaComponent, SetDayMealComponent],

  /*
  |--------------------------------------------------------------------------
  | Plugins
  |--------------------------------------------------------------------------
  |
  | Includes platforms, database integrations, third-party plugins, and more
  | Learn more here: www.jovo.tech/docs/plugins, www.jovo.tech/marketplace
  |
  */
  plugins: [
    // Add Jovo plugins here
    new AlexaPlatform(),
  ],

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
      'AMAZON.StopIntent': 'END',
    },
  },
});

module.exports = {
  app,
};
