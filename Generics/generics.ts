// Generics : In TS allows us to create REUSABLE components or functions that can work with multiple data types.

// unknown
const logAndRetrn = (val:unknown) => {
    console.log(val);
    return val;
}

const op1 = logAndRetrn(12);
const op2 = logAndRetrn("Hello");
const op3 = logAndRetrn(true);

console.log("----------");



// generics : single type
const logReturn = <Type>(val:Type):Type => {
    console.log(val);
    return val;
}
// <Type> : tyare khabar pade jyare apde function call kariye.

const op4 = logReturn<number>(21);
const op5 = logReturn<string>("ok");
const op6 = logReturn<boolean>(false);

console.log("----------");



// example
const addAny = (val1:any,val2:any):any => {
    return val1 + val2;
}

console.log(addAny(12,34));
console.log(addAny(true,false));
console.log(addAny("Hello ","Yash"));

console.log("----------");



// generics : mutiple types
const addMutiple1 = (val1:number,val2:string) => {};
const addMutiple2 = (val1:number,val2:number) => {};
const addMutiple3 = (val1:string,vaal2:boolean) => {};

const addMutiple = <T,U>(val1:T,val2:U) => {
    console.log(`Type of ${val1} is ${typeof val1}.`);
    console.log(`Type of ${val2} is ${typeof val2}.`);
}

addMutiple<number,number>(12,13);
console.log("----------");
addMutiple<number,string>(12,"13");
console.log("----------");
addMutiple<boolean,string>(false,"true");
console.log("----------");



// generics and non generics
const addMutipleee = <T,U>(val1:T,val2:U,val3:boolean) => {
    console.log(`Type of ${val1} is ${typeof val1}.`);
    console.log(`Type of ${val2} is ${typeof val2}.`);
    console.log(val3);
}

addMutipleee(12,13,true);
console.log("----------");
addMutipleee(12,"1cv3",false);
console.log("----------");
addMutipleee(false,"OKLp",true);
console.log("----------");