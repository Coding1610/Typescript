// Type Interface : It is same as Type Alias. It is use in Object and Classes.
// Is a powerful feature that allows you to define a contract for an object's shape.
// It specifies the properties and their types that an object must have to be considered 
// of that perticular interface type. Interaface are primarily used for type-checking during
// development and do not generate any JS code at runtime.
// Object Type
var objectType = {
    name: "Yash",
    age: 21,
    isMarried: false
};
var objectAlias = {
    name: "Yash",
    age: 21,
    isMarried: false
};
var objectInterface = {
    name: "Yash",
    age: 21,
    isMarried: false
};
var showDeatils = function (obj) {
    var name = obj.name, age = obj.age, isMarried = obj.isMarried;
    console.log("Name : ".concat(name));
    console.log("Age : ".concat(age));
    console.log("U are married : ".concat(isMarried));
};
showDeatils(objectInterface);
var newObject = {
    name: "YASH",
    age: 21,
    country: "India",
    contactNo: 9876543290
};
console.log(newObject);
console.log("------------");
var newInter = {
    name: "Lamborghini",
    country: "Italy",
    price: 5600000,
    type: "Sport"
};
console.log(newInter);
console.log("-----------");
