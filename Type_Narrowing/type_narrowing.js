// A typeof  guard in TS lets you narrow down the type of a variable based on its runtime value.
// In TS type narrowing allows you to write type-safe code ny ensuring you only operate on the correct type under certain circumtances.
// This is particularly useful with union and generic types.
var favHobbies = function (hobbies) {
    if (typeof hobbies === "object") {
        hobbies.map(function (ele) {
            console.log(ele, " ");
        });
    }
    else {
        console.log(hobbies);
    }
};
favHobbies("DSA");
favHobbies(['A', 'B', 'C']);