const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('render', () => {
    it('should render a triangle SVG with the specified color', () => {
      const triangle = new Triangle();
      triangle.setShapeColor('#FF0000');
      const renderedSvg = triangle.render().replace(/\s+/g, ' ').trim();
      expect(renderedSvg).toContain('<svg');
      expect(renderedSvg).toContain('viewBox="0 0 300 200"');
      expect(renderedSvg).toContain('<polygon points="150, 20 280, 180 20, 180" fill="#FF0000"');
      expect(renderedSvg).toContain('</svg>');
    });
  });
});

module.exports = Triangle;