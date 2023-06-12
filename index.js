const fs = require('fs');
const inquirer = require('inquirer');
const { createLogo } = require('./lib/logoGenerator');

// The user will be prompted for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length <= 3) {
          return true;
        }
        return 'Please enter up to three characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal number):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal number):',
    },
  ])
  .then((answers) => {
    // Generate the logo
    const logo = createLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);

    // The logo is saved as an SVG file
    fs.writeFile('logo.svg', logo, (err) => {
      if (err) {
        console.error('Error saving the logo:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
