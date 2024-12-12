// 1. Array using []
var arr1 = [1, 2, 3, 4, 5];
console.log(arr1[0]);
console.log(arr1[6]);
console.log(arr1.length);
// 2. Array using constuctor
var arr2 = new Array("A", "B", "C", "D", "E", "F", "G");
console.log(arr2[0]);
console.log(arr2[2]);
console.log(arr2.length);
// 3. Array using method
// const arr3:string[] = Array.of("A","B","C","D","E");
// console.log(arr1[0]);
// console.log(arr1[4]);
// Array Operation & Iteration
var fruits = ["Mango", "Apple", "Banana", "Orange"];
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
// const newLen = fruits.push("Kiwi"); // it shows new length of an array
console.log("--------");
var lastF = fruits.pop();
console.log(lastF);
console.log(fruits);
console.log("--------");
fruits.unshift("Gwawa");
console.log(fruits);
console.log("--------");
var firstF = fruits.shift();
console.log(fruits);
console.log("--------");
// using for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i], " ");
}
console.log("--------");
// using for...of loop
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var val = fruits_1[_i];
    console.log(val);
}
console.log("--------");
// using for...in loop
for (var index in fruits) {
    console.log(index);
}
console.log("--------");
// using forEach loop
fruits.forEach(function (ele) {
    console.log(ele);
});
console.log("--------");
// Map : It Creates new array with transform values
var doubleArr1 = arr1.map(function (val) { return val * val; });
console.log(doubleArr1);
console.log("--------");
var stringArr1 = arr1.map(function (val) { return val.toString(); });
console.log(stringArr1);
console.log("--------");
// Filter
var filterArr1 = arr1.filter(function (val) { return val % 2 === 0; });
console.log(filterArr1);
console.log("--------");