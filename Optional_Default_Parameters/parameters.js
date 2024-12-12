// TS allows us to define optional and default parameters in functions.
// 1. Default Parameter : Are specified by providing a default value in the parameter declaration.
var greet2 = function (name, id) {
    if (id === void 0) { id = 16; }
    console.log("Your name is ".concat(name, " and your id is ").concat(id, "."));
};
greet2("Yash");
greet2("Yash", 10);
// 2. Optional Parameter : Are denoted by appending a ? ssymbol after the parameter name.
var greet3 = function (name, id) {
    if (id) {
        console.log("Your name is ".concat(name, " and your id is ").concat(id, "."));
    }
    else {
        console.log("Your name is ".concat(name, "."));
    }
};
greet3("Yashu");
greet3("Yashu", 16);
