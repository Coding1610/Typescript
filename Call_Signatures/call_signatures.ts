// Call Signature : A call signature in TypeScript is a way to define the shape of a function.
                //  It specifies the types of the function's parameters and return value without
                //  implementing the function itself. It’s useful when defining types for functions or methods.

// without Call Signature
const addTwo = (k1:number,k2:number):number => { return k1+k2; };
console.log(addTwo(98,89));

// 1. with Call Signature
type addition = (x:number,y:number) => number;
const addBoth:addition = (m,n) => { return m+n; };
console.log(addBoth(78,87));

// 2. with Call Signature
type greet = (name:string) => string;
const greetFun:greet = (name) => { return `My name is ${name}.`; };
console.log(greetFun("Yashu"));