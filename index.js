const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

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
    // Generating the logo
    let logo;
    switch (answers.shape) {
      case 'circle':
        logo = new Circle(answers.text, answers.textColor, answers.shapeColor).render();
        break;
      case 'triangle':
        logo = new Triangle(answers.text, answers.textColor, answers.shapeColor).render();
        break;
      case 'square':
        logo = new Square(answers.text, answers.textColor, answers.shapeColor).render();
        break;
      default:
        console.error('Invalid shape');
        return;
    }

    // Saving the logo as an SVG file
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
