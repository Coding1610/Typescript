// Getter & Setter : In TS classes, you can use hetter and setter methods to control the access and modification of class properties.
// Setter methods/Property allow you to set the value of a property with additional logic or validation.(It take only one value as parameter)
// Getter methods/Property allow you to retrieve the value of a property.(It not take any value as parameter)
// Class
var Human = /** @class */ (function () {
    // Constructor
    function Human(name, country) {
        this.name = name;
        this.country = country;
    }
    Object.defineProperty(Human.prototype, "setAge", {
        // Setter Property
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("Age is not valid!!");
            }
            else {
                this._age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getAge", {
        // Getter Property
        get: function () {
            if (this._age === undefined) {
                throw new Error("Age is not defined!!");
            }
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    // Method
    Human.prototype.greetHuman = function () {
        return "Hy I'm ".concat(this.name, ", I'm ").concat(this._age, " years old and I'm from ").concat(this.country, ".");
    };
    return Human;
}());
var h1 = new Human("Yash", "India");
console.log(h1);
console.log(h1.greetHuman());
h1.setAge = 12;
console.log(h1.getAge);
console.log(h1.greetHuman());
console.log("--------------");
// Q.1 : Bank Account Balance
var PropertyBankAccount = /** @class */ (function () {
    function PropertyBankAccount() {
        this._propertyBalance = 0;
    }
    Object.defineProperty(PropertyBankAccount.prototype, "setNewBal", {
        // setter method
        set: function (balVal) {
            if (balVal < 0) {
                throw new Error("!! Balance is negative !!");
            }
            else {
                this._propertyBalance = balVal;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PropertyBankAccount.prototype, "getCurrBal", {
        // getter method
        get: function () {
            return this._propertyBalance;
        },
        enumerable: false,
        configurable: true
    });
    return PropertyBankAccount;
}());
// Instance
var newProperty = new PropertyBankAccount;
console.log(newProperty);
console.log(newProperty.getCurrBal);
newProperty.setNewBal = 12300;
console.log(newProperty.getCurrBal);
// newProperty.setNewBal = -9000;
// console.log(newProperty.getCurrBal);
console.log("--------------");
// Q.2 Temprature Convertor
var TempratureConvertor = /** @class */ (function () {
    function TempratureConvertor() {
        this._celsius = 0;
    }
    Object.defineProperty(TempratureConvertor.prototype, "setTemp", {
        // setter 1 method
        set: function (celTemp) {
            this._celsius = celTemp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TempratureConvertor.prototype, "getCel", {
        // getter 1 method 
        get: function () {
            return this._celsius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TempratureConvertor.prototype, "getFah", {
        // getter 2 method
        get: function () {
            return ((this._celsius * (9 / 5) + 32));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TempratureConvertor.prototype, "setCel", {
        // setter 2 method
        set: function (fahVal) {
            this._celsius = ((fahVal - 32) * (5 / 9));
        },
        enumerable: false,
        configurable: true
    });
    return TempratureConvertor;
}());
// Instance
var newTemp = new TempratureConvertor;
console.log(newTemp);
newTemp.setTemp = 23; // TC = 23
console.log(newTemp.getCel); // show TC
console.log(newTemp.getFah); // show C(23) -> F;
newTemp.setCel = 42; // TF = 42
console.log(newTemp.getCel); // show F -> C;
