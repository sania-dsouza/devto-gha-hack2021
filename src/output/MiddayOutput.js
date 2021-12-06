import { BaseOutput, Output } from '@jovotech/framework';

@Output()
export class MiddayOutput extends BaseOutput {
  
  build() {
    return {
      quickReplies: ['parfait', 'apple pie', 'tea cake'],
      listen: true
    };
  }
}
