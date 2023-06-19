const fs = require('fs');
const inquirer = require('inquirer');
const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square');

// The user will be prompted for input
function promptUser () {
  return inquirer.prompt([
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
  ]);
}

// Generating the logo
function generateLogo() {
  promptUser().then(answers => {
    const { text, textColor, shape, shapeColor } = answers;
    let logo;
    switch (shape) {
      case 'circle':
        logo = new Circle();
        break;
      case 'triangle':
        logo = new Triangle();
        break;
      case 'square':
        logo = new Square();
        break;
      default:
        console.error('Invalid shape');
        return;
    }

    logo.setColor(shapeColor)
    logo.setTextColor(textColor)
    logo.setText(text)

    const svg = logo.render();
    const logoPath = './examples/logo.svg';

    // Saving the logo as an SVG file
    fs.writeFile(logoPath, svg, (err) => {
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
}
  generateLogo();
