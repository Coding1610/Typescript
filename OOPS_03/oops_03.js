//    Acess Modifiers | Parent Class | Child Class |  Outside Class 
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
//    |---------------|--------------|-------------|---------------|
//       Public       |     Yes      |     Yes     |      Yes      |
//       Protected    |     Yes      |     Yes     |      No       |
//       Private      |     Yes      |     No      |      No       |
// Parent Class
var Persons = /** @class */ (function () {
    // Constructor
    function Persons(name, age, hobbies) {
        this.name = name,
            this.age = age,
            this.hobbies = hobbies;
    }
    // Method/Function
    Persons.prototype.greetParent = function () {
        return "Hy, I'm ".concat(this.name, ", ").concat(this.age, " years old, My Hobbies are ").concat(this.hobbies.join(", "));
    };
    return Persons;
}());
// Child Class : Inherit
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    // Constructor
    function Students(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    // Method/Function
    Students.prototype.greetChild = function () {
        return "".concat(_super.prototype.greetParent.call(this), " and I'm in grade ").concat(this.grade, ".");
    };
    return Students;
}(Persons));
// Class Instance
var Persons1 = new Persons("Yash", 21, ["Painting,Singing"]);
var Students1 = new Students("Yash", 21, ["Web Developer", "DSA"], 10);
console.log(Persons1);
console.log("-----------");
console.log(Students1);
// console.log(Persons1.age); // Not use outside the class
// console.log(Students1.grade); // Not use outside the class
console.log(Persons1.name); // use outside the class
// console.log(Persons1.greetParent()); // not use outside the class
console.log(Students1.greetChild()); // use outside the class
// Short Hand Property For Writing Same Upper code
// Parent Class
var NewPerson = /** @class */ (function () {
    // Constructor
    function NewPerson(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // Method/Function
    NewPerson.prototype.greetParent = function () {
        return "Hy, I'm ".concat(this.name, ", ").concat(this.age, " years old, My Hobbies are ").concat(this.hobbies.join(", "));
    };
    return NewPerson;
}());
// Child Class : Inherit
var NewStudent = /** @class */ (function (_super) {
    __extends(NewStudent, _super);
    // Constructor
    function NewStudent(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.name = name;
        _this.age = age;
        _this.hobbies = hobbies;
        _this.grade = grade;
        return _this;
    }
    // Method/Function
    NewStudent.prototype.greetChild = function () {
        return "".concat(_super.prototype.greetParent.call(this), " and I'm in grade ").concat(this.grade, ".");
    };
    return NewStudent;
}(NewPerson));
