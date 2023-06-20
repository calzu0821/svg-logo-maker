const Square = require('../lib/Square');

describe('Square', () => {
  test('renders a square SVG element with optional text', () => {
    const square = new Square();

    const expectedSvg = `
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: auto;">
        <rect x="50" y="50" width="200" height="100" fill="${square.color}" />
        ${square.text ? `<text x="150" y="105" text-anchor="middle" fill="${square.textColor}" font-size="40" alignment-baseline="middle">${square.text}</text>` : ''}
      </svg>
    `;

    expect(square.render()).toEqual(expectedSvg);
  });
});