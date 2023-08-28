/* BAD 

Class Rectangle implements methods (drawCircle and drawSquare) it has no use of, 
likewise Square implementing drawCircle, and drawRectangle, and class Circle (drawSquare, drawSquare).

*/

interface IShapeBad {
  drawCircle: () => void;
  drawSquare: () => void;
  drawRectangle: () => void;
}

class CircleShape implements IShapeBad {
  drawCircle() {
    //...
  }
  drawSquare() {
    //...
  }
  drawRectangle() {
    //...
  }
}

class SquareShape implements IShapeBad {
  drawCircle() {
    //...
  }
  drawSquare() {
    //...
  }
  drawRectangle() {
    //...
  }
}

class RectangleShape implements IShapeBad {
  drawCircle() {
    //...
  }
  drawSquare() {
    //...
  }
  drawRectangle() {
    //...
  }
}

interface IShape {
  draw();
}

interface ICircle {
  drawCircle();
}

interface ISquare {
  drawSquare();
}

interface IRectangle {
  drawRectangle();
}

interface ITriangle {
  drawTriangle();
}

class Circle implements ICircle {
  drawCircle() {
    //...
  }
}

class Square implements ISquare {
  drawSquare() {
    //...
  }
}

class Rectangle implements IRectangle {
  drawRectangle() {
    //...
  }
}

class Triangle implements ITriangle {
  drawTriangle() {
    //...
  }
}

class CustomShape implements IShape {
  draw() {
    //...
  }
}

/* 
  OR
  Classes (Circle, Rectangle, Square, Triangle, etc) can just inherit from the IShape interface and implement their own draw behavior.
*/

class Circle implements IShape {
  draw() {
    //...
  }
}

class Triangle implements IShape {
  draw() {
    //...
  }
}

class Square implements IShape {
  draw() {
    //...
  }
}

class Rectangle implements IShape {
  draw() {
    //...
  }
}
