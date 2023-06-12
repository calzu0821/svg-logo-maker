// class LogoGenerator {
//     createLogo(text, textColor, shape, shapeColor) {
//       // The SVG string is generated based on the provided input
//       const svg = `
//         <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
//           <rect width="100%" height="100%" fill="${shapeColor}" />
//           <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
//         </svg>
//       `;
  
//       return svg;
//     }
//   }
  
//   module.exports = new LogoGenerator();

const Triangle = require('./lib/Triangle');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');

class LogoGenerator {
  createLogo(text, textColor, shape, shapeColor) {
    let logo;

    switch (shape) {
      case 'circle':
        const circle = new Circle(shapeColor, 10);
        logo = circle.calculateArea();
        break;

      case 'triangle':
        const triangle = new Triangle(shapeColor, 5, 8);
        logo = triangle.calculateArea();
        break;

      case 'square':
        const square = new Square(shapeColor, 6);
        logo = square.calculateArea();
        break;

      default:
        throw new Error('Invalid shape provided');
    }

    // The SVG string is generated based on the provided input
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="100%" height="100%" fill="${shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">Area: ${logo}</text>
      </svg>
    `;
  }
}

module.exports = new LogoGenerator();
