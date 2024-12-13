// Type Interface : It is same as Type Alias. It is use in Object and Classes.
                 // Is a powerful feature that allows you to define a contract for an object's shape.
                 // It specifies the properties and their types that an object must have to be considered 
                 // of that perticular interface type. Interaface are primarily used for type-checking during
                 // development and do not generate any JS code at runtime.


// Object Type
const objectType : {
    name:string;
    age:number;
    isMarried:boolean
} = {
    name:"Yash",
    age:21,
    isMarried:false
};


// Type Alias
type TypeAlias = {
    name:string;
    age:number;
    isMarried:boolean
}
const objectAlias = {
    name:"Yash",
    age:21,
    isMarried:false
}


// Type Interface
interface TypeInterface {
    name:string;
    age:number;
    isMarried:boolean
}
const objectInterface = {
    name:"Yash",
    age:21,
    isMarried:false
}

const showDeatils = (obj:TypeInterface) => {
    const {name,age,isMarried} = obj;
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`U are married : ${isMarried}`);
}

showDeatils(objectInterface);