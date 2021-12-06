const { ProjectConfig } = require('@jovotech/cli-core');
const { AlexaCli } = require('@jovotech/platform-alexa');
// ...

const project = new ProjectConfig({
  // ...
  plugins: [
    new AlexaCli({
      locales: {
        en: ['en-US'],
      },
      skillId: 'amzn1.ask.skill.64032b81-ec2f-4bc8-b039-129e87c47ffc',
      askProfile: 'default',
      // files: {
      //   /* ... */
      // },
    }),
    // ...
  ],
});


module.exports = project;
