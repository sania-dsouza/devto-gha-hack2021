import { BaseComponent, Component, Intents } from '@jovotech/framework';
import moment from 'moment';
import { YesNoOutput } from '../output/YesNoOutput';
import { BreakfastOutput } from '../output/BreakfastOutput';
import { MiddayOutput } from '../output/MiddayOutput';
import { LunchOutput } from '../output/LunchOutput';

@Component()
export class SetDayMealComponent extends BaseComponent {
  START() {
    return this.$send(YesNoOutput, {
      message: 'Welcome to NutriPlanner app! Do you want to save your cal intake today?',
    });
  }

  @Intents('YesIntent')
  setCalIntake() {
    return this.$send(BreakfastOutput, {
      message:
        'Ok, today is ' + moment().format('Do MMM YYYY') + '. What did you eat for breakfast?',
    });
  }

  @Intents('NoIntent')
  dontSetCalIntake() {
    return this.$send({
      message: 'Alright! You can invoke me again by saying "Alexa, open jovo test" ',
    });
  }

  @Intents('SetBreakfastIntent')
  setMidday() {
    return this.$send(MiddayOutput, {
      message: 'Oh healthy you! And mid-day snack?',
    });
  }

  @Intents('SetMiddayIntent')
  setLunch() {
    return this.$send(LunchOutput, {
      message: 'Great! What was lunch like?',
    });
  }

  @Intents('SetLunchIntent')
  finishDayMeal() {
    return this.$send({
      message: 'I have saved your day meal for ' + moment().format('Do MMM YYYY') + '.',
    });
  }

  // UNHANDLED() {
  //   return this.START();
  // }
}
