function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

/*
paris = new Person('paris','charalampidis');
*/

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} `;
}
const person1 = new Person ('Paris','Charalampidis');

console.log(person1.greeting());

//customer constructor 

function Customer(firstName,lastName,phoneNumber,membership){
    /*this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.membership = membership;*/
    Person.call( this,firstName,lastName);
    this.phoneNumber = phoneNumber;
    this.membership = membership;
}
//inherit person prototype method
Customer.prototype = Object.create(Person.prototype);

//make customer.prototype return Customer()

Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('Tom','Smith','555-555-5555','Standart')
console.log(customer1);
// customer greeting 
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}.Welcome to our company `;

}
console.log(customer1.greeting());



