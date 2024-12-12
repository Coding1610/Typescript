// type 1 : number : use for int, float etc..

let num = 16;
num = 56;
// num = "number"; // error
console.log(num);
console.log(num+19);
console.log(num.toString());

let myFavNumber:number = 16;
let pi:number = 3.147;
let magicNumber:number = -1;

console.log(myFavNumber);
console.log(pi);
console.log(magicNumber);

let nanValue:number = NaN;
console.log(nanValue);



// type 2 : string : use for ' ' & " ".

let myName:string = "yashu";
let myLastName:string = "pRaJapaTi";

console.log(myName);
console.log(myLastName);
console.log(myName + " " + myLastName);

let myNameLen:number = myName.length;
console.log(myNameLen); 

let upperName:string = myName.toUpperCase();
console.log(upperName);

let lowerName:string = myLastName.toLowerCase();
console.log(lowerName);



// type 3 : boolean

let ruMarried:boolean = false;
ruMarried = true;
console.log(ruMarried);
console.log(ruMarried ? "you are married" : "you are single");

const isEven = (evenNum:number):boolean => { 
    // if(evenNum%2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return evenNum%2 == 0;
} 

console.log(isEven(11));
console.log(isEven(12));

const isDivisible = (divNum:number):boolean => {
    if(divNum%4 == 0 && divNum%8 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isDivisible(4));
console.log(isDivisible(64));



// type 4 : bigint

// let bigNum1:bigint = 9007199254740991n;
// console.log(bigNum1);
// let bigNum2 = BigInt(9007199254740992);
// console.log(bigNum2);
// let bigNum3:bigint = BigInt(9007199254740993);
// console.log(bigNum3);



// type 5 : any : is disable all types : ts === js : number, string, boolean, bigint, symbol, object

let n1:any = 125;
console.log(n1);
n1 = "125";
console.log(n1);
// n1 = 34567897654321n;
// console.log(n1);
n1 = false;
console.log(n1);

// n1.map(()=>{}); // no saftey



// type 6 : unknown : is a safer alternative to any beacause it still enforces type checking and type saftey.

let newNum = 16;
// newNum = true; // type checking : can't change type
// newNum.map(() => {}); // saftey checking : can't apply map method on number type

let n6:unknown;
n6 = 123;
n6 = false;
n6 = "string";
// n6 = 123456789765432n;

if( typeof n6 === "number" ){
    console.log("type of n6 is number");
}
else if( typeof n6 === "string" ){
    console.log("type of n6 is string")
}
else if( typeof n6 === "boolean" ){
    console.log("type of n6 is boolean");
}
else{
    console.log("type of n6 is bigint");
}