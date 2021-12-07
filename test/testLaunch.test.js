const { TestSuite, InputType } = require('@jovotech/framework');

const testSuite = new TestSuite();

test('should launch when prompted', async () => {
  const { output } = await testSuite.run({
    type: InputType.Launch, // or 'LAUNCH'
  });

  expect(output).toEqual([
    {
      message: 'Welcome to NutriPlanner app! Do you want to save your cal intake today?',
      quickReplies: ['yes', 'no'],
      listen: true,
    },
  ]);

  //console.log(output);

  expect(output[0]['message']).toBeDefined();
});
