import { BaseOutput, Output } from '@jovotech/framework';

@Output()
export class LunchOutput extends BaseOutput {
  build() {
    return {
      quickReplies: ['chicken and rice', 'fish and chips', 'ramen'],
      listen: true,
    };
  }
}
