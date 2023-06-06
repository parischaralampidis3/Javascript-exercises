
function printTwo(){
    console.log ("hello");
}
printTwo();

//------------------------------

function getYear (){

    let currentDate = new Date(); 

    let currentYear = currentDate.getFullYear();

    console.log( "The year is" + " " + currentYear );

}

getYear();

//---------------------------

function calcNumbers(x,y){

    return x * 4 + ( y + 10);

}

calcNumbers ( 2,4 ); 

console.log( calcNumbers (2,4) );

//------------------------------


let declareName  = function( name ){

    console.log ( " my name is " + name );

}

declareName ( 'Paris' );


//-----------------------------------

function subtract ( num1, num2 ){
    
    return( num1 - num2 );
  
  }
 const ageOfJavascript=  subtract (2019,1995);

 console.log( ageOfJavascript);

 //-------------------------


 



 



  