// Function Invocation

// 1
function greet(name:string,id:number):any { // Parameters
    console.log(`Your name is ${name} and your id is ${id}.`);
}
greet("Yash",1610); // Arguments

// 2
const printName = (name:string,id:number):any => {
    console.log(`Your name is ${name} and your id is ${id}.`);
}
printName("Jiamin",2302);

const sumTwo = (a:number,b:number):string => {
    return "hello";
}
console.log(sumTwo(12,13));

const sumOne = (a:number,b:number):number => {
    return a*b;
}
console.log(sumOne(12,13));

// palindrome
const isPalindroem = (pali:string):boolean => {
    return (pali === pali.split("").reverse().join("") );
}
console.log(isPalindroem("123421"));
console.log(isPalindroem("12321"));

// average of array
// type of array : nums:number[] , strs:string[] , bools:boolean[]
const findAverage = (nums:number[]):number => {
    let len:number = nums.length;
    let sum:number = 0;
    nums.forEach(element => {
       sum += element; 
    });
    return sum/len;
}
console.log(findAverage([1,2,3,4,5,6,7,8,9,10]));

// find max
const findMax = (nums:number[]):number => {
    let maxi:number = -1;
    nums.forEach(element => {
       if(maxi < element) maxi = element; 
    });
    return maxi;
}
console.log(findMax([12,62,73,84,59,96,57,38,49,10]));