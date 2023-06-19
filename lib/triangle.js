const Shape = require('./shape');

class Triangle extends Shape {
  render() {
    const textElement = this.text ? `<text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>` : '';

    return `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 20 280, 180 20, 180" fill="${this.color}" />
        ${textElement}
      </svg>
    `;
    }
  }

module.exports = Triangle;