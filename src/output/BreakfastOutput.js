import { BaseOutput, Output } from '@jovotech/framework';

@Output()
export class BreakfastOutput extends BaseOutput {
  
  build() {
    return {
      quickReplies: ['omelette', 'cereal', 'smoothie'],
      listen: true
    };
  }
}
