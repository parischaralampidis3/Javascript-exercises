//alert('connected');
/*
const info = {
    name: 'Brad',
    age: 35
}
info.name;
console.log(info);
*/
//set an instance 
/*
function Person(){
    this.name = 'Paris';
}
const paris = new Person();
console.log(paris);
*/
//set multiple instances 
/*
function Info(name, age){
    this.name = name;
    this.age = age; 
}

const paris = new Info('paris',36);
const john = new Info('john',45);

console.log(john.age);
*/

//use a method inside constructor

function Info(name, birthday){
    this.name = name;
    this.birthDate = new Date(birthday);
    this.calculateAge = function(){
      const diff =  Date.now() - this.birthDate.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    //this.calculateAge = function(){


    //}
}
const paris = new Info('Paris', '10/16/1984');

console.log(paris.calculateAge());
//console.log(paris.birthDate);
