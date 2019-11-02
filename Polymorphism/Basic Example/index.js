var Shape = function() {}

Shape.prototype.draw = function () {
    return "I'm a generic shape";
}

var Circle = function () {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function() {
    return "I'm a Circle"
}

var Square = function () {}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.draw = function() {
    return "I'm a Square"
}

var Triangle = function () {}
Triangle.prototype = Object.create(Shape.prototype);

var shapes = [new Shape(), new Circle(), new Square(), new Triangle()];

shapes.forEach(function(shape) {
    console.log("Shapes", shape.draw())
    // document.write(shape.draw() + "<br />")
});
