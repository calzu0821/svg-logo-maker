const Shape = require('../lib/Shape');

describe('Shape', () => {
  describe('setColor', () => {
    it('should set the color property', () => {
      const shape = new Shape();
      shape.setColor('red');
      expect(shape.color).toBe('red');
    });
  });

  describe('render', () => {
    it('should throw an error when called directly on the Shape class', () => {
      const shape = new Shape();
      expect(() => shape.render()).toThrowError('The render() method must be implemented by the subclass');
    });
  });
});

module.exports = Shape; 