// Unions : Types allows you to specify that a variable can hold values of maultiple types.
// You use the | (pipe) symbol to define union type. In TS when using a union type,
// it is essential to ensure that at least one of the types in the union includes 
// all the required properties. Failure to do so will result in atype error during compilation.
// ( a U b U c ) : ka to a ka to b ka to c ka to a,b,c
console.log("----------");
// Q.1
var inputValues = function (val) {
    if (typeof val === "number") {
        console.log("It is number");
    }
    else if (typeof val === "string") {
        console.log("It is string");
    }
    else {
        console.log("It is boolean");
    }
};
inputValues(89);
inputValues(false);
inputValues("hello");
// inputValues(234567890987654n); // Error bcoz we dont assign type bigint of parameter
console.log("----------");
// Q.2
var convertInput = function (value) {
    if (typeof value === "number") {
        console.log("double of ".concat(value, " is ").concat(value * 2, "."));
    }
    else {
        console.log("uppercase of ".concat(value, " is ").concat(value.toUpperCase(), "."));
    }
};
convertInput(76);
convertInput("abcdefghijklmnopqrstuvwxyz");
console.log("----------");
var intoduction = {
    name: "Yash",
    age: 21,
    role_stu: "NCC",
    empId: 109,
    role_emp: "Frontend Developer",
    department: "A90"
};
var minorIntro = {
    name: "Yash",
    age: 21,
    role_stu: "Leader",
    role_emp: "Developer"
};
