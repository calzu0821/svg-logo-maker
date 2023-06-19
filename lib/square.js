const Shape = require('./shape');

class Square extends Shape {
  render() {
    const textElement = this.text
      ? `<text x="150" y="105" text-anchor="middle" fill="${this.textColor}" font-size="40" alignment-baseline="middle">${this.text}</text>`
      : '';

    return `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        ${textElement}
      </svg>
    `;
  }
}

module.exports = Square;