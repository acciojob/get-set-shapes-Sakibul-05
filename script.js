//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Since square has equal sides, we only need to pass one argument (side) to the constructor.
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width; // Since all sides are equal in a square, perimeter = 4 * side.
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
