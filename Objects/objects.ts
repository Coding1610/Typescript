// Objects : Are used to store data with key-value pairs.
          // Each key in the object is a string (or a symbol in ES6) that map to a value.


// JS

const person1 = {
    firstName:"Man",
    lastName:"Patel",
    isStudent:true,
    age:21,
    address:{
        city:"Gujarat",
        country:"India"
    }
}

console.log(person1);
console.log(person1.firstName);
console.log(person1.age);
console.log(person1.address.city);

person1.address.city = "Keral";
// person.firstName = 1610; // in TS Error but in JS no Error
// console.log(person1.address.city);
console.log("---------");



// TS : jetli type declare kariye aetli j key-value pair avse

// 1 
const person2:{
    firstName:string;
    lastName:string;
    age:number;
    isStudent:boolean;
    address:{city:string;country:string}
} = {
    firstName:"Yash",
    lastName:"Prajapati",
    age:21,
    isStudent:true,
    address:{
        city:"Gujarat",
        country:"India"
    }
}
console.log(person2);
console.log("---------");

// 2
const person3:{
    firstName:string;
    lastName:string;
    age:number;
    isStudent:boolean;
    address:{city:string;country:string}
} = {
    firstName:"Jaimin",
    lastName:"Unagar",
    age:22,
    isStudent:true,
    address:{
        city:"Punjab",
        country:"India"
    }
}
console.log(person2);
console.log("---------");



// In school there are so many students with same profile stucture, then we write object like this for each one ?
// No : We have Type Aliases

// Object Type
type Product = {
    name:string;
    price:number;
    quantity:number;
}

// Object
const product1:Product = {
    name:"Lenovo",
    price:52000,
    quantity:5
}

const product2:Product = {
    name:"iphone",
    price:65000,
    quantity:10
}

const totalPrice = (products:Product) => {
    return `Total Price of ${products.name} is ${products.price * product1.quantity}.`;
}
console.log(totalPrice(product1));
console.log(totalPrice(product2));