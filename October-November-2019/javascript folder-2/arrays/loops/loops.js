//loops
//Looping in programming languages is a feature that facilitates the execution of a set of instructions/functions repeatedly while some condition evaluates to true.
/*An operation is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter has reached a prescribed number.
Counter not Reached: If the counter has not reached the desired number, the next instruction in the sequence returns to the first instruction in the sequence and repeats it.
Counter reached: If the condition has been reached, the next instruction “falls through” to the next sequential instruction or branches outside the loop. */

/*
for (let i = 0; i < 10; i++){
    console.log(i);
}
*/

/*
let fruits = ['banana', 'apple', 'orange','grape','pineapple','avocado']

for(let i=0 ; i<fruits.length; i++){
    console.log(fruits[i]);
}
*/


// for loop 
/*
for ( let i = 0; i < 10; i++){
  
   if( i === 2 ){
       console.log( "2 is my favorite number");
       continue;
   }

   if (i === 6){
      
       console.log("stop the loop");
        break;
   }

 
 
    console.log( 'number' + i);


}

*/
/*
for(let i = 0; i< 10; i++){
    switch(i){
        case 0:
            console.log('count started..' + [i]);
            break;
        case 5:
            console.log('middle counting..' + [i]);
            break;
        case 9:
            console.log('counting ended..' + [i]);
    }    
}
*/


//-------------------------------------

//while loop 
/*
let x= 0;

while(x < 10){
   
    console.log ( "number" + x);
    x++;

}
*/
/*
While:

entry control loop

condition is checked before loop execution

never execute loop if condition is false

there is no semicolon at the end of while statement

Do-while:

exit control loop

condition is checked at the end of loop

executes false condition at least once since condition is checked later

there is semicolon at the end of while statement.
*/
/*
let x = 5;

while(x < 10){
    console.log("number" + x);
x++;
}
//---------------------------------------

//while do loop

let i = 100;

do{
    console.log( "number" + i);
    i++;

}
*/
//-------------------------------------
/*
while(i<10)


//loop through arrays 


let words = [ "car", "ball", "apple"];
console.log(words);

for( let i = 0; i < words.length; i++){
   
   if( words.length === 3){
       console.log[i];
   }
    console.log( words[i]);
}

*/
//----------------------
/*
let a = 0;

while( a < words.length){
    console.log( words[a]);
    a++;
}
*/
//---------------------------

/*
const obj = [ "car", "ball", "doll" ];

const nums = [ "one", "two", "three", "four" ];

const numbers = [ 1,2,3,4 ];

//----------------------------


const users = [
    { id : 1, name:"Paris" },
    { id :2, name:"Nefeli" },
    { id :3, name:"Marina"}

];

const info ={
    firstName: "Paris",
    lastName: "Charalampidis",
    age: 35
}

/*

for( let i = 0; i < obj.length; i++){

 
    console.log( obj[i] );

    
}

*/
//------------------------------------
//for each loop method
/* The forEach() method executes a providerd function once for each array element.*/
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
/*
numSum= nums.forEach(function (num){

if(num === "two"){
    console.log(  nums.push("five"));
}

});

console.log(numSum);
console.log(nums);
*/
//--------------------------------------
//.map() method
/*
//array.protoype.map()

let addTwo = numbers.map( function(x){

return x *2;

});
console.log( addTwo);
*/
//------------------------
/*

const ids = users.map( function ( user ){

    return user.id;

});
console.log( ids) ;
*/

// for in loop 
/*
for (let x in info){
    console.log( ` ${x}  : ${info[x]}` );
}

*/

//------------------------------------------------

/*

let i = -10;

while( i <= 19 ){
    console.log ( 'number' + i );
    i++;
}
*/

//--------------------------------------------------
/*

let x = 10

while( x <= 40){

    console.log( "print even numbers" + x );
    x+=2;
}*/

//-------------------------------------------
/*
let y = 300 ;

while ( y < 330){
    
 if ( y % 2 !== 0 ){

         console.log( "print odd numbers" + y ); 
 }
    y+=1;

 }

*/

//---------------------------------------------


//-------------------------------------------
/*
let str = "hello" ;
let count = 0 ;


while( count < str.length ){

    console.log( str[count]);
    count++; 
}
*/
//---------------------------------------------
/*
for ( let i = 0; i<=   16;  i+=8 ){
    console.log( i );
 
}
*/