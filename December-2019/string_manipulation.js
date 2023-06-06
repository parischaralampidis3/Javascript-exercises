// string methods and properties are important to perform any operation of the given string, the string search methods have a separate article for better understanding.

//javascript lenght property 
//this property returns the number of characters present in the string.In the case of an array, this property returns the number of elements present in the array.

//let str = 'Hola, world'
//console.log("length of string is: "+str.length)


//javascript string indexOf() method 
//This method returns the index of the last occurence of a specified value in the string or -1 if the value is not found.

//let index = str.indexOf('world')
//console.log(index)


//javascript string lastIndexOf() method
// starts at a specified index and searches from right to left.
//By defalt the search starts at the last element and ends at the first.
//Negative start values counts from the last element (but still searches from right to left).

//let index = str.lastIndexOf('o');
//console.log(index);


//Javascript slice()
//This method extracts a part of the string based on the given starting-index and ending index and returns a new string.
//The substring() method extracts characters from start to end (exclusive).
//The substring() method does not change the original string.

/*let str = 'Lorem ipsum dolor sit amet, consectetur adip'

a = str.slice(0,21);
b = str.slice(22,45)

console.log(a)
console.log(b)
*/

//Javascript substring() method
//This method returns the part of the given string from the start index to an end index.Indexing start from zero(0).
/*
let str = 'Mind, Power, Soul';

let part = str.substring(6,11);
console.log(part)
*/
//Javascript substr() method
//This method returns the specified number of characters from the specified index from the given string.it basically extracts a part of the original string.

//difference between substr() and substring()method

//substr() allows you to specify the maximum length to return
//substring() allows you to specify the indices and the second argument is NOT inclusive

/*var str = 'Mind, Power,Soul';
var part = str.substr(1,-3);
console.log(part)
*/

//Javascript replace() method
//This method replaces a part of the given string or a regular expression.The original string will remain unchanged
/*
var str = 'Mind, Power, Soul'; 
var part = str.replace("Power", "Space");
console.log(part) */

//Javascript replaceAll() method
//This method returns a new string after replacing all the matches of a string with a specified string or a regular expression. 
//The original string is left unchanged after this operation. 

/*var str = "Mind, Power, Power, Soul";
var part = str.replaceAll("Power","Space");
console.log(part);
*/

//Javascript toUpperCase() method
/*This method converts all the characters present in the String to upper case, and returns a new string with all characters in upper case.
This method accepts single parameter stringVariable string that you want to convert in upper case.
*/
/*let geeks = "stands-for-GeeksforGeeks";
console.log(geeks.toUpperCase(geeks));
*/

//Javascript toLowerCase() method
/* This method converts all the characters present in the so lowercase and returns a new string with all the characters in lowercase*/
/*
let geeks = "stands-for-GeeksforGeeks";
console.log(geeks.toLowerCase(geeks));
*/

//Javascript concat() method
/* This method combines the text of two strings and returns a new combined of joined string.To concatenate two strings, we use concat() method
on one object of string and send another object of string as a parameter. This method accepts one argument. The variable contains text in double quotes or single quotes.  */
/*
let names = ["Paris","Giorgia","Margaret"];
let family = ["Dad","Mom","kid"];

console.log(names.concat(family))
*/

//Javascript trim method()
/* This method is used to remove either white spaces from the given string.This method returns a new string with removed white spaces.
This method is called on a String object. This method doesn't accept any parameter. */
/*
const greeting = "   Hello world !            "
console.log(greeting.trim())
 */
//Javascript split method()
/*This method splits the string into an array of sub-strings. This method returns a new array. This method accepts a single parameter character on which you want to split the string. */

/*let geeks = 'stands-for-GeeksforGeeks';
console.log(geeks.split(''));*/

//Javascript charAt() method()
/* This method returns the character at the specified index.String in javascript has zero based index  */
let geeks = "Hello world!"

console.log(geeks.charAt(4));

