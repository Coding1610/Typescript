// Objects : Are used to store data with key-value pairs.
// Each key in the object is a string (or a symbol in ES6) that map to a value.
// JS
var person1 = {
    firstName: "Man",
    lastName: "Patel",
    isStudent: true,
    age: 21,
    address: {
        city: "Gujarat",
        country: "India"
    }
};
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
var person2 = {
    firstName: "Yash",
    lastName: "Prajapati",
    age: 21,
    isStudent: true,
    address: {
        city: "Gujarat",
        country: "India"
    }
};
console.log(person2);
console.log("---------");
// 2
var person3 = {
    firstName: "Jaimin",
    lastName: "Unagar",
    age: 22,
    isStudent: true,
    address: {
        city: "Punjab",
        country: "India"
    }
};
console.log(person2);
console.log("---------");
// Object
var product1 = {
    name: "Lenovo",
    price: 52000,
    quantity: 5
};
var product2 = {
    name: "iphone",
    price: 65000,
    quantity: 10
};
var totalPrice = function (product1) {
    return "Total Price of ".concat(product1.name, " is ").concat(product1.price * product1.quantity, ".");
};
console.log(totalPrice(product1));
console.log(totalPrice(product2));
