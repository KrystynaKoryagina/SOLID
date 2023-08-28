class Rectangle {
  width: number;
  height: number;

  setWidth(width = 0) {
    this.width = width;
  }

  setHeight(height = 0) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setSize(size = 0) {
    this.width = size;
    this.height = size;
  }

  setWidth(width = 0) {
    this.setSize(width);
  }

  setHeight(height = 0) {
    this.setSize(height);
  }
}

const square = new Square();

square.setSize(4);
console.log(square.getArea()); // 16

square.setHeight(2); // 2 * 2 = 4
console.log(square.getArea()); // ? 2 * 4 = 8
