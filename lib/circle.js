const Shape = require('./shapes');

class Circle extends Shape {
  constructor() {
    super();
    this.radius = 50;
  }

  render() {
    const textElement = this.text ? `<text x="150" y="105" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>` : '';

    return `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${this.radius}" fill="${this.shapecolor}" />
        ${textElement}
      </svg>
    `;
  }
}

module.exports = Circle;