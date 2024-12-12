// 1. Array using []
const arr1:number[] = [1,2,3,4,5];
console.log(arr1[0]);
console.log(arr1[6]);
console.log(arr1.length);

// 2. Array using constuctor
const arr2:string[] = new Array("A","B","C","D","E","F","G");
console.log(arr2[0]);
console.log(arr2[2]);
console.log(arr2.length);

// 3. Array using method
// const arr3:string[] = Array.of("A","B","C","D","E");
// console.log(arr1[0]);
// console.log(arr1[4]);




// Array Operation & Iteration

const fruits:string[] = ["Mango","Apple","Banana","Orange"];

console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
// const newLen = fruits.push("Kiwi"); // it shows new length of an array
console.log("--------");

const lastF = fruits.pop();
console.log(lastF);
console.log(fruits);
console.log("--------");

fruits.unshift("Gwawa");
console.log(fruits);
console.log("--------");

const firstF = fruits.shift();
console.log(fruits);
console.log("--------");



// using for loop
for( let i = 0 ; i < fruits.length ; i++ ){
    console.log(i,fruits[i], " ");
}
console.log("--------");

// using for...of loop
for( const val of fruits ){
    console.log(val);
}
console.log("--------");

// using for...in loop
for( const index in fruits ){
    console.log(index);
}
console.log("--------");

// using forEach loop
fruits.forEach((ele) => {
    console.log(ele);
});
console.log("--------");



// Map : It Creates new array with transform all values
const doubleArr1:number[] = arr1.map((val:number) => val*val);
console.log(doubleArr1);
console.log("--------");

const stringArr1:string[] = arr1.map((val:number) => val.toString());
console.log(stringArr1);
console.log("--------");



// Filter : It Creates new array with transform condition values
const filterArr1:number[] = arr1.filter((val:number) => val%2 === 0);
console.log(filterArr1);
console.log("--------");