// Type Interface : It is same as Type Alias. It is use in Object and Classes.
                 // Is a powerful feature that allows you to define a contract for an object's shape.
                 // It specifies the properties and their types that an object must have to be considered 
                 // of that perticular interface type. Interaface are primarily used for type-checking during
                 // development and do not generate any JS code at runtime.


// Object Type
const objectType : {
    name:string;
    age:number;
    isMarried:boolean
} = {
    name:"Yash",
    age:21,
    isMarried:false
};


// Type Alias
type TypeAlias = {
    name:string;
    age:number;
    isMarried:boolean
}
const objectAlias = {
    name:"Yash",
    age:21,
    isMarried:false
}


// Type Interface
interface TypeInterface {
    name:string;
    age:number;
    isMarried:boolean
}
const objectInterface = {
    name:"Yash",
    age:21,
    isMarried:false
}

const showDeatils = (obj:TypeInterface) => {
    const {name,age,isMarried} = obj;
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`U are married : ${isMarried}`);
}

showDeatils(objectInterface);


// When use Type Interface & Type Alias

// 1. Use custom type when you need unions, intersection or mapped types
// 2. use interface when defining object shape or classes that adhere to a contarct.
// 3. Interface can extend other interface to inherit their members.


// Type Alias : same name not allow
type obj1 = {
    name:string;
    age:number;
}

type obj2 = {
    country:string;
    contactNo:number;
}

type data = obj1 | obj2;

const newObject:obj1&obj2 = {
    name:"YASH",
    age:21,
    country:"India",
    contactNo:9876543290
}

console.log(newObject);
console.log("------------");



// Type Interface : same name allow
interface inter1 {
    name:string;
    country:string;
}

interface inter2 {
    price:number;
    type:string;
}

interface inter extends inter1, inter2 {}

const newInter : inter = {
    name:"Lamborghini",
    country:"Italy",
    price:5600000,
    type:"Sport"
}

console.log(newInter);
console.log("-----------");