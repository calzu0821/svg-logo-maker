const Shape = require('../lib/shapes');

describe('Shape', () => {
  describe('setShapeColor', () => {
    it('should set the color property', () => {
      const shape = new Shape();
      shape.setShapeColor('red');
      expect(shape.shapeColor).toBe('red');
    });
  });
});

module.exports = Shape; 