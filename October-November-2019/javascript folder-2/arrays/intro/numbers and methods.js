// numberss & math object


/*

let val;



const num1 = 10 ;

const num2  = 5 ;

val = num1 + num2;

val = num1 - num2;

val = num1 / num2;

val = num1 * num2;

val = num1 % num2;

*/

const phrase = 'Hey that\'s terrible, i cant\'t hear you';
console.log(phrase);
console.log(phrase.length);
console.log(phrase.charAt(2));
/*

val = Math.round(4.2);

val = Math.floor(3.9);

val = Math.ceil(4.2)

val = Math.pow(4,2);

val = Math.sqrt(64);



val = Math.abs(10);

val = Math.random();

val = Math.min(10,1,4,5);

val = Math.max( 10,2,40,3);

console.log(val);


val = Math.floor(Math.random()*5);
console.log(val);

*/


//String methods and contetanation

// concatenation


/*
const name = "Paris" ; 

const sur = "Charalampidis";

let val;

val =name + " " + sur ; 


//

val = "That\'s awesome, i can\'t wait" ;

console.log( val  );


val = name.length;
console.log(val);

//concat()

val = name.concat(" ", sur );

console.log(val);

//toUpperCase();

val = name.toUpperCase();
console.log(val);

val = name.toLowerCase();
console.log(val);



val = name[1];
console.log(val);

let myVar = 10 ;
myVar -= 5;
console.log( myVar );

val = name.charAt(3);
console.log(val)

val = name.charAt(name.length -1);
console.log(val);


val = name.substring(1,3);
console.log(val);

val = name.slice(2);

console.log(val);


let phrase ;

str = "Hello my name is Paris";

phrase = str.split( " " );
console.log( phrase );


let summary;

const info = "Swiffer";

const animal = "cat";

summary = info.concat(" " + animal);

console.log(summary);
*/

//template literals 


 let html ; 

 const name = "Paris" ;

 const age = 35;

 const city = "Athens";

 const job = "web developer";


//without template literals
 
/*html = "<ul> <li>  name: " +  name + " </li>   <li> age: "+ age +" </li>      <li>city: " + city +  "</li>        <li> job " + job +  "</li></ul>";

 document.body.innerHTML = html;*/

 /*html = '<ul>'+

        '<li> name: ' +  name + '</li>' +
        '<li> age: '  +  age  + '</li>' +
        '<li> city: ' +  city + '</li>' +
        '<li> job: '  + job + '</li>';
 
        '</ul>';

*/

// with template literals 
html = 
        `
        <ul>

        <li> name:  ${name} </li>
        <li> age:  ${age} </li>
        <li> city:  ${city} </li>
        <li> job:  ${job} </li>

           
        
        </ul>
        `;
document.body.innerHTML = html;


//-----------------------------------------


let a = 5 ; 

let b = 10;

console.log( `Fifteen is ${ a + b } and not ${ 2 * a + b }` ); 