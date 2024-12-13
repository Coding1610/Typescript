// Generics : In TS allows us to create REUSABLE components or functions that can work with multiple data types.
// unknown
var logAndRetrn = function (val) {
    console.log(val);
    return val;
};
var op1 = logAndRetrn(12);
var op2 = logAndRetrn("Hello");
var op3 = logAndRetrn(true);
console.log("----------");
// generics : single type
var logReturn = function (val) {
    console.log(val);
    return val;
};
// <Type> : tyare khabar pade jyare apde function call kariye.
var op4 = logReturn(21);
var op5 = logReturn("ok");
var op6 = logReturn(false);
console.log("----------");
// example
var addAny = function (val1, val2) {
    return val1 + val2;
};
console.log(addAny(12, 34));
console.log(addAny(true, false));
console.log(addAny("Hello ", "Yash"));
console.log("----------");
// generics : mutiple types
var addMutiple1 = function (val1, val2) { };
var addMutiple2 = function (val1, val2) { };
var addMutiple3 = function (val1, vaal2) { };
var addMutiple = function (val1, val2) {
    console.log("Type of ".concat(val1, " is ").concat(typeof val1, "."));
    console.log("Type of ".concat(val2, " is ").concat(typeof val2, "."));
};
addMutiple(12, 13);
console.log("----------");
addMutiple(12, "13");
console.log("----------");
addMutiple(false, "true");
console.log("----------");
// generics and non generics
var addMutipleee = function (val1, val2, val3) {
    console.log("Type of ".concat(val1, " is ").concat(typeof val1, "."));
    console.log("Type of ".concat(val2, " is ").concat(typeof val2, "."));
    console.log(val3);
};
addMutipleee(12, 13, true);
console.log("----------");
addMutipleee(12, "1cv3", false);
console.log("----------");
addMutipleee(false, "OKLp", true);
console.log("----------");
