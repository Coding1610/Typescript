// TS allows us to define optional and default parameters in functions.

// 1. Default Parameter : Are specified by providing a default value in the parameter declaration.

const greet2 = (name:string,id:number=16) => {
    console.log(`Your name is ${name} and your id is ${id}.`);
}
greet2("Yash");
greet2("Yash",10);


// 2. Optional Parameter : Are denoted by appending a ? ssymbol after the parameter name.

const greet3 = (name:string,id?:number) => {
    if(id){
        console.log(`Your name is ${name} and your id is ${id}.`);
    }
    else{
        console.log(`Your name is ${name}.`);
    }
}
greet3("Yashu");
greet3("Yashu",16);