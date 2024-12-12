// Tuples : are a data structure that allows us to store a fixed size collection of
// element of diffrent types. They are similar to arrays, but with a key diffrence,
// the type of elements in a tuples are fixed and declared at the time of creation,
// where arrays can hold elements of the same type and their size can vary. 
// tuple
var per1 = ["Yash", 21, false];
var per2 = ["Jaimin", 22, true];
// per1.push("Add"); // Error
// function
var perDetails = function (per) {
    var name = per[0], age = per[1], isDL = per[2];
    return "".concat(name, " is ").concat(age, "years old and he/she has ").concat(isDL ? '' : 'no', " DL.");
};
console.log(perDetails(per1));
console.log(perDetails(per2));
var pro1 = ["Lenovo", 54000, 6];
var pro2 = ["IMAC", 4500, 1];
var showDetails = function (pro) {
    var productName = pro[0], productPrice = pro[1], productQuantity = pro[2];
    return "Product : ".concat(productName, " , Price : ").concat(productPrice, " , Quantity : ").concat(productQuantity);
};
console.log(showDetails(pro1));
console.log(showDetails(pro2));
