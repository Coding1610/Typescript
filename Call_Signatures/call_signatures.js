// Call Signature : A call signature in TypeScript is a way to define the shape of a function.
//  It specifies the types of the function's parameters and return value without
//  implementing the function itself. It’s useful when defining types for functions or methods.
// without Call Signature
var addTwo = function (k1, k2) { return k1 + k2; };
console.log(addTwo(98, 89));
var addBoth = function (m, n) { return m + n; };
console.log(addBoth(78, 87));
var greetFun = function (name) { return "My name is ".concat(name, "."); };
console.log(greetFun("Yashu"));
