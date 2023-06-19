const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Triangle', () => {
  test('render() returns the SVG string for a triangle with the given shape color', () => {
    const shape = new Triangle('ABC', 'blue', 'blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

