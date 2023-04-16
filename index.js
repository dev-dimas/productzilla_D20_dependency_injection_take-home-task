const { Select } = require('enquirer');
const contentPrompt = require('./data/content');
const program = require('./utils/prompt');
const calculateGeometry = require('./src/shape');
const Student = require('./src/student');

let content = contentPrompt.en;

const promptLanguage = new Select({
  name: 'language',
  message: 'Choose a language :',
  choices: ['English', 'Bahasa Indonesia'],
});

const startPrompt = async () => {
  try {
    const choosedLanguage = await promptLanguage.run();

    if (choosedLanguage == 'Bahasa Indonesia') {
      content = contentPrompt.id;
    }

    const closePrompt = async () => {
      try {
        console.log('\n========================================================');
        console.log(content.closePrompt.message);
        console.log(content.closePrompt.sign);
      } catch (error) {
        console.error(error);
      }
    };

    console.clear();

    await program(content, calculateGeometry, Student, closePrompt);
  } catch (error) {
    console.error(error);
  }
};

console.clear();
startPrompt();
