// Static Property and Methods : It belongs to the class itself rather than to instance of the class. By making methods and properties static, we can access them 
// directly from the class without needing to create an instance of the class. This is useful for utility functions or properties that
// don't reply on instance-specific data.
// Class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.tellPrice = function (carPrice) {
        return "Price of ".concat(this.carName, " is ").concat(carPrice, ".");
    };
    Car.carName = "Lamborghini";
    return Car;
}());
console.log(Car.carName);
console.log(Car.tellPrice(56000000));
