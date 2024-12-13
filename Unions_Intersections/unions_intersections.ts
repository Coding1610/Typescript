// Unions : Types allows you to specify that a variable can hold values of maultiple types.
         // You use the | (pipe) symbol to define union type. In TS when using a union type,
         // it is essential to ensure that at least one of the types in the union includes 
         // all the required properties. Failure to do so will result in atype error during compilation.

         // ( a U b U c ) : ka to a ka to b ka to c ka to a,b,c

console.log("----------");

// Q.1
const inputValues = (val:string|number|boolean) => {
    if( typeof val === "number" ){
        console.log("It is number");
    }
    else if( typeof val === "string" ){
        console.log("It is string");
    }
    else{
        console.log("It is boolean");
    }
}
inputValues(89);
inputValues(false);
inputValues("hello");
// inputValues(234567890987654n); // Error bcoz we dont assign type bigint of parameter

console.log("----------");


// Q.2
const convertInput = (value:number|string) => {
    if( typeof value === "number" ){
        console.log(`double of ${value} is ${value*2}.`);
    }
    else{
        console.log(`uppercase of ${value} is ${value.toUpperCase()}.`);
    }
};
convertInput(76);
convertInput("abcdefghijklmnopqrstuvwxyz");

console.log("----------");



// Intersection : Types allow you t combine multiple types into a single type. 
               // you use the & (ampersand) symbol to define an intersection type.
               // In Real life intersection of two means, common of both.
               // But in TS life intersection of two means, everything of both.

type student = {
    name:string;
    age:number;
    role_stu:string
}

type employee = {
    empId:number;
    role_emp:string;
    department:string
}

// type fullInfo = student & employee;
type minorInfo = student | employee;

const intoduction:student&employee = {
    name:"Yash",
    age:21,
    role_stu:"NCC",
    empId:109,
    role_emp:"Frontend Developer",
    department:"A90"
}
 
const minorIntro: minorInfo = {
    name:"Yash",
    age:21,
    role_stu:"Leader",
    role_emp:"Developer"
}