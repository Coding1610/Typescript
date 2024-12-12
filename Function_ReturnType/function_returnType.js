// Function Invocation
// 1
function greet(name, id) {
    console.log("Your name is ".concat(name, " and your id is ").concat(id, "."));
}
greet("Yash", 1610); // Arguments
// 2
var printName = function (name, id) {
    console.log("Your name is ".concat(name, " and your id is ").concat(id, "."));
};
printName("Jiamin", 2302);
var sumTwo = function (a, b) {
    return "hello";
};
console.log(sumTwo(12, 13));
var sumOne = function (a, b) {
    return a * b;
};
console.log(sumOne(12, 13));
// palindrome
var isPalindroem = function (pali) {
    return (pali === pali.split("").reverse().join(""));
};
console.log(isPalindroem("123421"));
console.log(isPalindroem("12321"));
// average of array
// type of array : nums:number[] , strs:string[] , bools:boolean[]
var findAverage = function (nums) {
    var len = nums.length;
    var sum = 0;
    nums.forEach(function (element) {
        sum += element;
    });
    return sum / len;
};
console.log(findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// find max
var findMax = function (nums) {
    var maxi = -1;
    nums.forEach(function (element) {
        if (maxi < element)
            maxi = element;
    });
    return maxi;
};
console.log(findMax([12, 62, 73, 84, 59, 96, 57, 38, 49, 10]));
