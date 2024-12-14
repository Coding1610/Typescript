// Class : a class in terms of OOP is a blueprint for creating objects.

// In TS, there is a convention to use PascalCase(UpperCamelCase) for class names.
// This means that class names should start with a capital letter ann each subsequent word in the class name should also begin with a capital letter.


// Class
class ClassName {

    name:string;
    age:number;
    hobbies:string[];

    // Constructor
    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies
    }

}

// Class Instance
const InstanceName1:ClassName = new ClassName("Yash",21,["Frontend","Design"]);
const InstanceName2:ClassName = new ClassName("Man",21,["DSA","Chess"]);

console.log(InstanceName1);
console.log(InstanceName2);