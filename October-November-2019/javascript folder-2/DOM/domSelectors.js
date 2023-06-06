
/*

//document.getElementById;

let val ;



val = document.getElementById("task-title").id;



val = document.getElementById("task-title").style.color= "#FFFFFF";

val = document.getElementById( "task-title").style.background = "#399";

val = document.getElementById("task-title").style.padding = "20px";




val = document.getElementById("task-title").textContent = "Tasks to do";


val = document.getElementById("task-title").innerText = "Tasks";


//innerHTML 

//val = document.getElementById("task-form").innerHTML = "<span style='color:red'>TEXT</span>";


console.log(val)


console.log(val);


*/

/*
//document.querySelector();

//


let val; 


val = document.querySelector("li");

val = document.querySelector(".collection");

val = document.querySelector('#task-title');


//style the query

val = document.querySelector('li').style.background = "#3345";

//val = document.querySelector( 'ul li'). style.color = "red";

//you can use pseudo classes 

val = document.querySelector('li:first-child').style.color = "white";

val = document.querySelector(' li:last-child').style.color = "brown";

val = document.querySelector('li:nth-child(3)').style.color = "yellow";


console.log(val);


*/





/*


// selectors for multiple elements 

// document.getElementsByClassName();


//returns an html collection 


const items = document.getElementsByClassName("collection-item");

//manipulate the items

//items[2].textContent = "item";



//more preffered way 
const listItems = document.querySelector('ul').getElementsByClassName("collection-item");



console.log( items );

console.log( listItems );

*/





/*

// getElementsByTagName();

//returns an html collection

let lis = document.getElementsByTagName( "li" );

lis[2]. style.color = "red";

lis[3].textContent = 'item';




console.log(lis);
console.log(lis[3]);
console.log(lis[2]);




//convert an HTML collection into array 

//1

lis = Array.from(lis);

lis.reverse();


//2

lis.forEach ( function (li){

    console.log( li );

    li.style.color="red";

})

console.log(lis);

*/


//----document.querySelectorAll();



const itemList = document.querySelectorAll( "ul.collection li.collection-item" );


itemList[0];

list = itemList.forEach( function ( li, index ){

    console.log(li);

    li.style.color = "red";

    li.textContent = `${index}:"hello"`;

    
});


//----------------------------------------------------


for(let i=0;  i<itemList.length; i++){

    console.log(itemList[i]);
    i++;
}


//----------------------------------------------------

//change style odd and even 

const listOdd = document.querySelectorAll(" li:nth-child( odd ) ");

const listEven = document.querySelectorAll(" li:nth-child( even ) ");

/*

//for each

listEven.forEach( function (li){

    

   
   li.style.background="gray";

});

*/

//change through for loop 

//FOR LOOP WILL WORK EITHER WITH HTML COLLECTION OR NODELIST

for ( let i = 0; i < listOdd.length; i++ ){

    //listOdd[i].style.background = " #ccc " ;
    
    listEven[i].style.color = "#ccc";
}



//-----------------------------------------------------






console.log( itemList );

console.log(itemList[0]);


//---------------------------------------------------------



//this returns node lists



//-------single element selectors

//val = document.getElementById("book-form").style.display = "none";
















  








