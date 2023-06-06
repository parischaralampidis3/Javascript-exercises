//alert('connected');

class Car{
    constructor(brand){
        this.carName = brand;
    }
    get brand(){
        return this.carName;
    }
    set brand(newName){
        this.carName = newName
    }
}
const myCar = new Car('ford');
console.log(myCar); 

myCar.brand  = 'Ferrari';
console.log(myCar);

//inheritance in es6 classes or subclasses


class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName=lastName;
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;

        
    }
customer(){
    return `${this.firstName} ${this.lastName} welcome to our company`;
} 
 
}   
 
const john = new Customer( 'John', 'Doe' ,'6947491008','premium');

console.log(john.greeting());
console.log(john.customer());