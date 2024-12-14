//    Acess Modifiers | Parent Class | Child Class |  Outside Class 

//    |---------------|--------------|-------------|---------------|

//       Public       |     Yes      |     Yes     |      Yes      |
//       Protected    |     Yes      |     Yes     |      No       |
//       Private      |     Yes      |     No      |      No       |


// Parent Class
class Persons {
    
    name:string; // default public
    protected age:number;
    hobbies:string[];

    // Constructor
    constructor(name:string,age:number,hobbies:string[]){
        this.name = name,
        this.age = age,
        this.hobbies = hobbies
    }

    // Method/Function
    protected greetParent():string{
        return `Hy, I'm ${this.name}, ${this.age} years old, My Hobbies are ${this.hobbies.join(", ")}`;
    }

}

// Child Class : Inherit
class Students extends Persons {

    private grade:number;

    // Constructor
    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name,age,hobbies);
        this.grade = grade
    }

    // Method/Function
    greetChild():string {
        return `${super.greetParent()} and I'm in grade ${this.grade}.`;
    }

}

// Class Instance
const Persons1:Persons = new Persons("Yash",21,["Painting,Singing"]);
const Students1:Students = new Students("Yash",21,["Web Developer","DSA"],10);

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
class NewPerson {

    // Constructor
    constructor(
        public name:string,
        protected age:number,
        public hobbies:string[]
    ){}

    // Method/Function
    protected greetParent():string{
        return `Hy, I'm ${this.name}, ${this.age} years old, My Hobbies are ${this.hobbies.join(", ")}`;
    }

}

// Child Class : Inherit
class NewStudent extends NewPerson {

    // Constructor
    constructor(
        public name:string,
        protected age:number,
        public hobbies:string[],
        private grade:number
    ){
        super(name,age,hobbies);
    }

    // Method/Function
    greetChild():string {
        return `${super.greetParent()} and I'm in grade ${this.grade}.`;
    }

}