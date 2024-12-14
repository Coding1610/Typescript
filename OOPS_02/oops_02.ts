// Inheritance : Allows a class to reuse the functionality of an existing class wothout rewriting it.
              // Is a mechanism in which one class acquires the property of another class. 


// super() : It is used in the context of inheritance. It allows a subclass to call methods or properties of its
          // superclass. This is particulary useful when you want to extend the behavior of a parent class while
          // still leveraging its existing functionality.
          
          
// Class : Base/Parent 
class Person {

    name:string;
    age:number;
    hobbies:string[];

    // Constructor
    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    // Method/Function
    greet():string {
        return `Hy I'm ${this.name}, I'm ${this.age} years old, My Hobbies are ${this.hobbies.join(", ")}`;
    }

}

// Class : Derived/Child
class Student extends Person {

    grade:number;

    // Constructor
    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name,age,hobbies);
        this.grade = grade;
    }

    // Method/Function
    greet():string {
        return `${super.greet()} and I'm in grade ${this.grade}.`
    }

}

const Person1:Person = new Person("Yash",21,["Web Developer","DSA"]);
console.log(Person1);
console.log(Person1.greet());

console.log("----------");

const Student1:Student = new Student("Yash",21,["Web Developer","DSA"],12); 
console.log(Student1);
console.log(Student1.greet());

console.log("----------");