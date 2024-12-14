// Abstract Classes : Provide a way to define common properties and methods that multiple derived classes can share.
                   // This promotes code reuse and helps establish a common interface for related classes.
                   // AC can not be instantiated(cannot make instance).
                   // AC focus on class inheritance and sharing common functionality
                   // Whereas the useContext hook in React focuses on managing global state and allowing components to consume that state.

// Abstract Class
abstract class Area {
    constructor(public shape:string){}
    abstract calculateArea():number;
    abstract displayArea():void;
}

// Class 1
class Circle extends Area {
    constructor(public shape:string,public radius:number){
        super(shape);
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
    public displayArea(): void {
        console.log(`Radius of ${this.shape} is ${this.radius}meter.`);
    }
}

// Instance
const c1:Circle = new Circle("Circle",5);
console.log(c1.calculateArea());
c1.displayArea();

// Class 2 
class Square extends Area {
    constructor(public shape:string,public length:number){
        super(shape);
    }
    public calculateArea(): number {
        return this.length * this.length;
    }
    public displayArea(): void {
        console.log(`Length of one side of ${this.shape} is ${this.length}meter.`)
    }
}

// Instance
const s1:Square = new Square("Square",5);
console.log(s1.calculateArea());
s1.displayArea();