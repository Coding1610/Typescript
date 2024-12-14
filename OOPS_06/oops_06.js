// Abstract Classes : Provide a way to define common properties and methods that multiple derived classes can share.
// This promotes code reuse and helps establish a common interface for related classes.
// AC can not be instantiated(cannot make instance).
// AC focus on class inheritance and sharing common functionality
// Whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Class
var Area = /** @class */ (function () {
    function Area(shape) {
        this.shape = shape;
    }
    return Area;
}());
// Class 1
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(shape, radius) {
        var _this = _super.call(this, shape) || this;
        _this.shape = shape;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.displayArea = function () {
        console.log("Radius of ".concat(this.shape, " is ").concat(this.radius, "meter."));
    };
    return Circle;
}(Area));
// Instance
var c1 = new Circle("Circle", 5);
console.log(c1.calculateArea());
c1.displayArea();
// Class 2 
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(shape, length) {
        var _this = _super.call(this, shape) || this;
        _this.shape = shape;
        _this.length = length;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.length * this.length;
    };
    Square.prototype.displayArea = function () {
        console.log("Length of one side of ".concat(this.shape, " is ").concat(this.length, "meter."));
    };
    return Square;
}(Area));
// Instance
var s1 = new Square("Square", 5);
console.log(s1.calculateArea());
s1.displayArea();
