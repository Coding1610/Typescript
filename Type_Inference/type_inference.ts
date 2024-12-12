// Type Inference : Type inference(infere(assume)) in TS refers
                //  to the ability of the TSC to automatically 
                //  determine and assign types of variables, expressions, 
                //  and function return values based on their usage and context in the code.




// Best Practices

// 1 : not use type inference for simple cases where the assigned value clearly indicates the intended type.

// 2 : when in doubt, provide explicit type annotation to make your intention clear.

// 3 : avoid relying too heavily on type inference when the aasigned value is complex or ambiguous.

// 4 : Regularly review and refactor your code to ensure the inferred types align with your intentions.



let myStr = "yashu"; // the compiler infers the type string for myStr.

let myNum = 1610; // the compiler infers the type number for myNum;

let myBool = true; // the compiler infers the type boolean for myBool;