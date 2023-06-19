class Shape {
    constructor() {
      this.text = '';
      this.textColor = '';
      this.shapeColor = '';
    }
  
    setText(text) {
      this.text = text;
    }

    setTextColor(textColor) {
      this.textColor = textColor;
    }

    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
}

module.exports = Shape
  