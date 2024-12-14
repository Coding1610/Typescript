// Inheritance : Allows a class to reuse the functionality of an existing class wothout rewriting it.
// Is a mechanism in which one class acquires the property of another class. 
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
// super() : It is used in the context of inheritance. It allows a subclass to call methods or properties of its
// superclass. This is particulary useful when you want to extend the behavior of a parent class while
// still leveraging its existing functionality.
// Class : Base/Parent 
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Method/Function
    Person.prototype.greet = function () {
        return "Hy I'm ".concat(this.name, ", I'm ").concat(this.age, " years old, My Hobbies are ").concat(this.hobbies.join(", "));
    };
    return Person;
}());
// Class : Derived/Child
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // Constructor
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    // Method/Function
    Student.prototype.greet = function () {
        return "".concat(_super.prototype.greet.call(this), " and I'm in grade ").concat(this.grade, ".");
    };
    return Student;
}(Person));
var Person1 = new Person("Yash", 21, ["Web Developer", "DSA"]);
console.log(Person1);
console.log(Person1.greet());
console.log("----------");
var Student1 = new Student("Yash", 21, ["Web Developer", "DSA"], 12);
console.log(Student1);
console.log(Student1.greet());
console.log("----------");
