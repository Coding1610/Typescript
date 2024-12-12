// Enums : it is used when we want to represent a set of related values
        // and choose one value from multiple options. Enums provide a 
        // convenient way to define a set of named values and associate 
        // them with specific meanings. 

// Enum
enum Roles {
    user = "user",
    admin = "admin"
}

// Object type
type Login = {
    name?:string;
    email:string;
    password:string;
    role:Roles
}

// User 1 
const user1 = {
    name:"Yash",
    email:"xyz45@gmail.com",
    password:"okjj7yh",
    role:Roles.user
}

// User 2
const user2 = {
    email:"fgh78@gmail.com",
    password:"8i6jnt",
    role:Roles.admin
}

const loginDetails = (user:Login) => {
    const {email,password,role} = user;
    return role === "admin" ? `User with email ${email} & password ${password} is Admin` : `User with email ${email} & password ${password} is Normal User.`;
}

console.log(loginDetails(user1));
console.log(loginDetails(user2));