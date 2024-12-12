// Enums : it is used when we want to represent a set of related values
// and choose one value from multiple options. Enums provide a 
// convenient way to define a set of named values and associate 
// them with specific meanings. 
// Enum
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
// User 1 
var user1 = {
    name: "Yash",
    email: "xyz45@gmail.com",
    password: "okjj7yh",
    role: Roles.user
};
// User 2
var user2 = {
    email: "fgh78@gmail.com",
    password: "8i6jnt",
    role: Roles.admin
};
var loginDetails = function (user) {
    var email = user.email, password = user.password, role = user.role;
    return role === "admin" ? "User with email ".concat(email, " & password ").concat(password, " is Admin") : "User with email ".concat(email, " & password ").concat(password, " is Normal User.");
};
console.log(loginDetails(user1));
console.log(loginDetails(user2));
