// Class : a class in terms of OOP is a blueprint for creating objects.
// In TS, there is a convention to use PascalCase(UpperCamelCase) for class names.
// This means that class names should start with a capital letter ann each subsequent word in the class name should also begin with a capital letter.
// Class
var ClassName = /** @class */ (function () {
    // Constructor
    function ClassName(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return ClassName;
}());
// Class Instance
var InstanceName1 = new ClassName("Yash", 21, ["Frontend", "Design"]);
var InstanceName2 = new ClassName("Man", 21, ["DSA", "Chess"]);
console.log(InstanceName1);
console.log(InstanceName2);
