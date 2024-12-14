// Getter & Setter : In TS classes, you can use hetter and setter methods to control the access and modification of class properties.
                  // Setter methods/Property allow you to set the value of a property with additional logic or validation.(It take only one value as parameter)
                  // Getter methods/Property allow you to retrieve the value of a property.(It not take any value as parameter)

// Class
class Human {
    
    private _age:number | undefined;
    
    // Constructor
    constructor(
        public name:string,
        public country:string,
    ){}

    // Setter Property
    public set setAge(age:number){
        if( age > 150 || age < 0 ){
            throw new Error("Age is not valid!!");
        }
        else{
            this._age = age;
        }
    }

    // Getter Property
    public get getAge():number {
        if( this._age === undefined ){
            throw new Error("Age is not defined!!");
        }
        return this._age;
    }

    // Method
    greetHuman():string {
        return `Hy I'm ${this.name}, I'm ${this._age} years old and I'm from ${this.country}.`
    }

}

const h1:Human = new Human("Yash","India");

console.log(h1);
console.log(h1.greetHuman());
h1.setAge= 12;
console.log(h1.getAge);
console.log(h1.greetHuman());

console.log("--------------");



// Q.1 : Bank Account Balance

class PropertyBankAccount {

    private _propertyBalance:number = 0;

    // setter method
    public set setNewBal(balVal:number){
        if( balVal < 0 ){
            throw new Error("!! Balance is negative !!");
        }
        else{
            this._propertyBalance = balVal;
        }
    }

    // getter method
    public get getCurrBal():number{
        return this._propertyBalance;
    }   

}

// Instance
const newProperty:PropertyBankAccount = new PropertyBankAccount;

console.log(newProperty);
console.log(newProperty.getCurrBal);
newProperty.setNewBal = 12300;
console.log(newProperty.getCurrBal);
// newProperty.setNewBal = -9000;
// console.log(newProperty.getCurrBal);

console.log("--------------");



// Q.2 Temprature Convertor

class TempratureConvertor {

    private _celsius = 0;
    
    // setter 1 method
    public set setTemp(celTemp:number){
        this._celsius = celTemp;
    }
    
    // getter 1 method 
    public get getCel():number {
        return this._celsius;
    }

    // getter 2 method
    public get getFah():number {
        return ( (this._celsius * (9/5) + 32)  );
    }

    // setter 2 method
    public set setCel(fahVal:number){
        this._celsius = ((fahVal-32)*(5/9));
    }

}

// Instance
const newTemp:TempratureConvertor = new TempratureConvertor;
console.log(newTemp);

newTemp.setTemp = 23; // TC = 23
console.log(newTemp.getCel); // show TC

console.log(newTemp.getFah); // show C(23) -> F;

newTemp.setCel = 42; // TF = 42
console.log(newTemp.getCel); // show F -> C;