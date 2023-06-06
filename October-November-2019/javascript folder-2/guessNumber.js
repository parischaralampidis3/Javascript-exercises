

//set a random number

let randomNumber = Math.floor(  Math.random( ) * 100 );


//set a number

let age = Number( prompt ( "Guess a number" ) );


// check for number 

if ( age === randomNumber ){


   alert( "it seems you guessed the number" );


}else if( age > randomNumber ) {

   
    alert( "It's too high! Guess again" );

}else {
    alert ( "It's too low. Guess again" );
}


//test random number 

console.log( "te4st randomNumber", randomNumber);
  

//thank you for watching