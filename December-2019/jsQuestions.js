
/*
1. Write a console.log statement saying "Hello World!" for each language that you know.

console.log( "Hello, world!" );
console.log( "Καλημέρα, κόσμε!");
console.log( "Hola, mundo");


2. Consider the following code:

console.log( "I'm awesome" );

Copy the code in your .js file and run it. You will see that you will get a SyntaxError. 
Find a solution for this error. Hint: read the error message carefully,
it also gives an indication of where the problem is.

3. Declare a variable x and initialize it with an integer, 
using these exact steps:
3.1 First, declare your variable x 

const x;


(do not initialize it yet).
3.2 Add a console.log statement that explains 
 in words what you think the value of x is,
 like in this example:

 console.log("the value of my variable x will be: syntax error that asks to initialize the declaration" );




  // TODO -> here you initialize your variable
  console.log('the value of my variable x will be: whateverYouThinkItWillLog');
3.3 Add a console.log statement that logs the value of x.

console.log(x);

3.4 Now initialize your variable x with an integer.

const x = 7;


3.5 Next, add a console.log statement that explains what you think the value of x is.

console.log("the value of my variable x will be an integer");


3.6 Add a console.log statement that logs the value of x. Steps to be taken:

console.log(x);

  // TODO -> here you declare your variable
  console.log('the value of x will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of x
  // TODO -> here you initialize your variable
  console.log('the value of x will be: whateverYouThinkItWillLog');
  // TODO -> log value of x again
4. Declare a variable y and assign a string to it.

let y = "Have a good day!";

4.1 Write a console.log statement in which you explain in words what you think the value of the string is.

console.log( "My output will be the string 'have a good day' " );


4.2 Now console.log the variable y.

console.log( y );


4.3 Now assign a new string to the variable y.

y = "Have a good night!";


4.4 Just like you did before write a console.log statement that explains in words what you think will be logged to the console.

console.log("My output will be the reassigned string");

4.5 Now console.log y again.

console.log( y );

  // TODO -> here you declare AND assign your string
  console.log('the value of my string will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of the string to the console
  // TODO -> assign a new value to your variable x
  console.log('the value of my string will be: whateverYouThinkItWillLog');
  // TODO -> log the actual value of the string to the console
5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?

console.log( Math.round(7.25) );


5.1 Declare a variable z and assign the number 7.25 to it.

let z = 7.25;

5.2 Console.log z.

console.log(z);

5.3 Declare another variable a that has the value of z but rounded to the nearest integer.

const a = Math.round( 7.25 );

5.4 Console.log a.

console.log( a );

5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.

if( z || a === 7.25){

  console.log( "z is higher" );
  //reasign to new variable
  higherValue = z;
  console.log( "higherResultValue",higherValue );

}else{

  console.log( "a is higher" );

}

5.6 Console.log the highest value.
console.log( "higherValue", higherValue);

6. Arrays!
6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions.)

const info = [];

6.2 Write a console.log statement that explains in words what you think the value of the array is.

console.log( "the output of my result will be an empty array ");

6.3 Console.log your array.

console.log("info array", info);

6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).

const myFavouriteAnimals = [ "elephant", "cat", "dog", "horse" ];

6.5 Log your array.

console.log( myFavouriteAnimals );

6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.

myFavouriteAnimals.push("baby pig");

6.7 Log your new array!

console.log("new favourite animals list", myFavouriteAnimals);

7. More strings

7.1 Let's consider the following string: let myString = "this is a test".

let myString = "this is a test"

7.2 Add the string to your file and console.log it.

console.log("string:",myString);


7.3 Find a way to get the length of myString.

let lengthOfString =  myString.length;

7.4 Console.log the length of myString.

console.log( "length of string: " + lengthOfString );


//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

//8.1 First declare at least four variables and assign them different data types.

const myNumber = 7;
const myString = "My name is Paris!";
const myBoolean = true;
const myNull = null;
let myUndefined;
const myInfo = [ "Paris", 35];



//8.2 For each variable write a console.log statement that logs the value

console.log( "log my Number", myNumber );
console.log( "log my String", myString );
console.log( "log myBoolean", myBoolean );
console.log( "log myNool", null );
console.log( "log my undefined", myUndefined );
console.log( "log my Info", myInfo );

let foo = 3;
console.log('The value of my variable foo is: ' + foo);
(Curious to know what a foo is? Check this article on WikiPedia.)*/
/*
//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.

console.log( "The output of myNumber will be : number " );
console.log( "The output of myString will be : string " );
console.log( "The output of myBoolean will be : Boolean ");
console.log( "The output of myNull will be : object " );
console.log( "The output of myUndefind will be : undefined" );
console.log( "The output of myInfo will be a : function" );

//8.4 Now use typeof to log the actual type of your variables.

console.log( "type of myNumber", typeof myNumber );
console.log( "type of myString", typeof myString );
console.log( "type of myBoolean", typeof myBoolean );
console.log( "type of myNull:", typeof myNull );
console.log( "type of myUndefined", typeof myUndefined );
console.log( "type of myInfo", typeof myInfo );

//8.5 Now compare the types of your different variables with one another.

//compare string with data types

if( myString == myNumber){
  console.log( "Number and String are the same type" );
}else{
  console.log( "Number and String are not the same type");
 }

 if( myString == myBoolean){
  console.log( "String and Boolean are the same type" );
}else{
  console.log( "String and Boolean are not the same type");
 }

 if( myString == myNull){
  console.log( "String and Null are the same type" );
}else{
  console.log( "String and Null are not the same type");
 }

 if( myString == myUndefined){
  console.log( "String and Undefined are the same type" );
}else{
  console.log( "String and Undefined are not the same type");
 }

 if( myString == myInfo){
  console.log( "String and Array are the same type" );
}else{
  console.log( "String and Array are not the same type");
 }

 //compare number with data types

 if( myNumber == myBoolean){
  console.log( "Number and Boolean are the same type" );
}else{
  console.log( "Number and Boolean are not the same type");
 }

 if( myNumber == myNull){
  console.log( "Number and Null are the same type" );
}else{
  console.log( "Number and Null are not the same type");
 }

 if( myNumber == myUndefined){
  console.log( "Number and Undefined are the same type" );
}else{
  console.log( "Number and Undefined are not the same type");
 }

 if( myNumber == myInfo){
  console.log( "Number and Array are the same type" );
}else{
  console.log( "Number and Array are not the same type");
 }

 //compare boolean with data types

 if( myBoolean == myNull){
  console.log( "Boolean and Null are the same type" );
}else{
  console.log( "Boolean and Null are not the same type");
 }

 if( myBoolean == myUndefined){
  console.log( "Boolean and Undefined are the same type" );
}else{
  console.log( "Boolean and Undefined are not the same type");
 }

 if( myBoolean == myInfo){
  console.log( "Number and Undefined are the same type" );
}else{
  console.log( "Number and Undefined are not the same type");
 }

//compare null with data types

 if( myNull == myUndefined){
  console.log( "Null and Undefined are the same type" );
}else{
  console.log( "Null and Undefined are not the same type");
 }

 if( myNull == myInfo){
  console.log( "Null and Array are the same type" );
}else{
  console.log( "Null and Array are not the same type");
 }


//8.6 Make sure to also show a message when the variables you are comparing are not the same type.


For example:

let x = 9;
let y = 'Hello';

if (...) {
    console.log('SAME TYPE');
}
// TODO -> add a way of giving feedback if your variables don't have the same type

*/

/*
//9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
//console.log("The value of x will be: 1");

//9.1 Add at least 3 console.log statements in which you show that you understand what % does.

/*------------------ */
/*
 function calcRemainder(a,b){

  return (a % b);

}

 calcRemainder(10,5) ;

finalResult = calcRemainder(10, 5);

console.log("final result of remainder will be", finalResult);
*/


/*
function calcRemainderTwo(a,b){

  return ( a % b);

}
calcRemainderTwo(4,3);

secondFinalResult = calcRemainderTwo(4,3);

console.log( "second final result of remainder will be: ", secondFinalResult );

*/


/*
function calcRemainderThree(a,b){

    return( a % b);
}
calcRemainderThree(15,13);

thirdFinalResult = calcRemainderThree(15,13);

console.log( thirdFinalResult );

*/

/*

//10. Write a program to answer the following questions:
//10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

const info = [ "Paris", 35, 1984 ,true, null  ];
console.log( info );
//10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
//10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).
const x = 6/0;
const y = 10/0;
if ( x === y ){
  console.log( "Somewhere here leave infinities");
}else{
  console.log( "Nothing is infinite anymore");
}

*/