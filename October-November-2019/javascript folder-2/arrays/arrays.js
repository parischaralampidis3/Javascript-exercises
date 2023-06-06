

//arrays
/*Arrays consist of a special data structure, in order to store ordered collections */

let numbers = [1,4,6];

console.log(numbers)

//how to replace an index array

numbers[0] = 0;
console.log(numbers)

//add a new index

numbers[3] = 8

console.log(numbers)


//push an index at the end of the array

numbers.push(10)

console.log("index pushed at the end of the array: " +  numbers)

//add  an index in front of the index array

numbers.unshift(-1)

console.log("index added at the front of the array: " + numbers)

//remove an index at the end of the array
numbers.pop()
console.log("index remover from the end of the array: " + numbers)


numbers.shift()
console.log("index removed from the front of the array: " + numbers)


//get the lenght of the array
val = numbers.length;
console.log("length: " + val)






//const someNames = [ "Eve", "Adam", "Bob", "Bill"];
//let val;
//const colors = [ "green","blue","yellow"];

//check if an array exists
val = Array.isArray(numbers);


/*

//insert a new value
val = numbers[3] = 10;
*/

/*
 
// manipulating array

//push (add at the end of array )

val = numbers.push(20);
val = numbers.push(25);


 */
/*
colors.push( "orange" );

 colors.push( "violet" )

*/
/*
//pop (remove from the end)

val = numbers.pop();

*/
/*
colors.pop();
*/

/*
//unshift add at the start of array

val = numbers.unshift(5);

val = numbers.shift();

*/
/*
colors.unshift( 'light blue',"red" );

colors.shift();
*/
//-------------------------------


//------------------------------
/*
val = numbers.reverse();
*/
//------------------------------
/*
//val =  someNames.sort();
*/
//------------------------------
/*
let sorting = function( a,b ){
    if( a<b ){
        return -1;
    }
    else if(a>b){
        return 1;
    }
    else{

        return 0;

    }

}
console.log(someNames.sort(sorting));

*/
/*

val = someNames.slice( 1,3 );
*/

//-------------------------
/*
val = numbers.concat( someNames );
*/
//---------------------------
/*
val = someNames.splice(3,0, "Paris");
*/
/*
console.log(someNames);
console.log(someNames);
console.log(numbers);
console.log( val );

*/

 /*
console.log( colors);

console.log("push:",colors);

console.log( colors.indexOf( "yellow" ) );

*/