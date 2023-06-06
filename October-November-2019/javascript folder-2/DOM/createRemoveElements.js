


/*

//create an element

const li = document.createElement( "li" ); 



//create a text node

const t = document.createTextNode( "hello" ); 




//create a link element

const link = document.createElement( "a" ); 







//add a class 

li.className = " collection-item "; 


//add an id 

li.id = "new-item"; 




//set an attribute 

li.setAttribute( "tittle", "new item" ); 


//add a class icon

link.className = " delete-item secondary-content "; 




link.innerHTML = '<i class="fa fa-remove"></i>';




document.querySelector("ul.collection").appendChild( li );





//appendChild  


li.appendChild( t ); 

li.append(link);




 

console.log (link);
console.log( li );



*/


//--------------------------------------------------------------




/*


//replace 

//create element 

const newHeading = document.createElement(  "h2" );

//get element by id 

const oldHeading = document.getElementById( "task-title"); 

//get paretn 

const cardAction = document.querySelector( ".card-action" );






//add a text node and append

const text = document.createTextNode( "task-title" );

newHeading.appendChild( text );



cardAction.replaceChild(newHeading, oldHeading);



console.log( newHeading );

console.log( oldHeading );


*/
//-------------------------------------------------------------------


//remoove elements


let val ; 

//create variable and get ul an

const list = document.querySelector( "ul");

const lis = document.querySelectorAll( "li");



//list.remove( lis );

lis[2].remove();

//---remove by child

list.removeChild( lis[3] );



//classess and attr
// classes 

const firstLi = document.querySelector( "li:first-child");

const link = firstLi.children[0]



val = link.className;

val = link.classList;

val = link.classList[0];

link.classList.add( "test" );

link.classList.remove( 'test' );

val = link;


//attributes 

val = link.getAttribute( "href" );

val = link.setAttribute( "href", "https://www.facebook.com ");

val = link.hasAttribute( "href" );

val = link.removeAttribute( "href");

//--------------------------------------



console.log( val );
console.log( list );
console.log( lis );
