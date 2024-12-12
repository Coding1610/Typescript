// Tuples : are a data structure that allows us to store a fixed size collection of
         // element of diffrent types. They are similar to arrays, but with a key diffrence,
         // the type of elements in a tuples are fixed and declared at the time of creation,
         // where arrays can hold elements of the same type and their size can vary. 

         // order , size , types are fixed

         // Best Practices : make tuple type READONLy


// tuple type
type tupleName = readonly[string,number,boolean];

// tuple
const per1:tupleName = ["Yash",21,false];
const per2:tupleName = ["Jaimin",22,true];

// per1.push("Add"); // Error

// function
const perDetails = (per:tupleName) => {
    const [name,age,isDL] = per;
    return `${name} is ${age}years old and he/she has ${isDL ? '' : 'no'} DL.`;
}

console.log(perDetails(per1));
console.log(perDetails(per2));


// Q.1
type ProductDetails = readonly[string,number,number];

const pro1:ProductDetails = ["Lenovo",54000,6];
const pro2:ProductDetails = ["IMAC",4500,1];

const showDetails = (pro:ProductDetails) => {
    const [productName,productPrice,productQuantity] = pro;
    return `Product : ${productName} , Price : ${productPrice} , Quantity : ${productQuantity}`;
}

console.log(showDetails(pro1));
console.log(showDetails(pro2));