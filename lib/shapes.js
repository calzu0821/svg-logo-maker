class Shape {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    setColor(color) {
      this.shapeColor = color;
    }
  
    render() {
      throw new Error('render() method must be implemented');
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="40" y="40" width="220" height="220" fill="${this.shapeColor}" />`;
    }
  }
  
module.exports = { Shape, Triangle, Circle, Square };
  