let val 



const list = document.querySelector( "ul.collection" );

const itemList = document.querySelector( "li.collection-item:first-child" );



val = list ;

val = itemList ;



 // get child node
 // child nodes gives us all different types of nodes not just elements 

 val = list.childNodes;
// val = list.childNodes[0];

//childrens gives us elements 
val = list.childNodes[3].nodeType;


// 1 - element
// 2 - attribute 
// 3 - text node
// 8- comment
// 9 -document itself
//10 - doctype

//get children element nodes

//this runs an html collection 


val = list.children;

//we can get specific elements


val = list.children[0];
list.children[1].textContent = "HELLO";



//CHILDREN OF CHILDREN 

val = list.children[3].children[0];





//list.firstChild;
//this gives you node

val = list.firstChild;

//this gives you the actual element

val = list.firstElementChild;




//list.lastChild;
//this gives you node

val = list.lastChild;

//this gives you the actual element

val = list.lastElementChild;

//count child elements 

val = list.childElementCount; 



//get parent node 

val = itemList.parentNode;

val = itemList.parentElement;

//get parent of parent 

val = itemList.parentElement.parentElement;



//get next sibling 

val = itemList.nextSibling;

val = itemList.nextSibling.nextElementSibling;

//get previous siblin 

val =itemList.previousSibling;

val = itemList.previousSibling.previousElementSibling;





console.log(val); 