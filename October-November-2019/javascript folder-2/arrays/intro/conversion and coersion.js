//type conversion 
/*

let val;

val = 5;

console.log(val);

console.log(typeof val);
console.log(val.length);

*/

//conversion to string

/*

let val;

val = String(5132);

console.log(val);
console.log(typeof val);
console.log(val.length);

*/

/*
let val;

val = (5).toString();

val = (true).toString();


console.log(val);
*/

//conversion to number 

/* 

val ; 

let val = Number( "5" );


console.log(val);
console.log(typeof val);
*/

/*
let val ; 

val = Number("5.6")

console.log(val);
console.log(val.toFixed());

*/

// parse method




//parse method helps us to convert a float number to decimal

/*let val;

 val = parseInt( "5.5" );
 console.log(val);
 console.log(typeof val);
*/
/*
 let val;

 val = parseInt( "666.7" );

 console.log( val );
 
 console.log( typeof val );
*/





 //parse float 

 //Parse float helps us convert a decimal string number to  float number 



/*
 let val ; 
val = parseFloat( "10.30" );

console.log( val );

*/

/*
//type coersion 

let num1 = "5";

let num2 = 6;

//let sum = num1 + num2 ;

let sum = Number ( num1 + num2 );
console.log( sum );

*/36
//convert age to number 
//conditional exercises
/*
let age = Number( prompt( "What is your age?" ) ) ;4
console.log( age );
36

//------------------------------------------------

5
if ( age < 0){

    console.log( "you're way below zero");

}else{

    console.log(" i think you're on your way!");
}


//-----------------------------------------------


 if( age === 36 ){
    console.log( "happy birthday Paris! ");
}36

//------------------------------------------------

if( age % 2 !== 0  ){
    console.log( "your age is odd" );
}else{
    console.log( "it seems you get an even number");36
}

//----- how to get a perfect square 

if  ( ( Math.sqrt(age) + ' ') .includes( ".") === false){
    console.log( " your number is a perfect square");
}


//-------------------------------------------------------

*/

//val = Math.floor(Math.random()*100);


//set a random number

let randomNumber = Math.floor( Math.random()*100 );

//test random number 


//set a number

let age = Number( prompt ( "Guess a number" ) );


// check for number 

if ( age === randomNumber ){

   alert( "it seems you guessed the number");

}else if( age > randomNumber ) {
   
    alert( "It's too high! Guess again");

}else {
    alert ( "It's too low. Guess again");
}

console.log( "te4st randomNumber", randomNumber);
 