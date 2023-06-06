

const btn = document.querySelector( ".clear-tasks" );

const main = document.querySelector( ".card" );




//----------------------------------------------------

 //btn.addEventListener( "click", onClick );

 //btn.addEventListener( "dblclick", onClick );
 
 //btn.addEventListener( "wheel", onClick );
 
 //btn.addEventListener( "mousedown",onClick); 
 
 //btn.addEventListener( "mouseup",onClick); 


//----------------------------------------------------

//main.addEventListener( "mouseenter", onClick );

//main.addEventListener( "mouseleave", onClick );

//main.addEventListener( "mouseover", onClick );


//-----------------------------------------------------



main.addEventListener( "mousemove", onClick );







function onClick(e){

    console.log( `"target:" ${e.type}`);
}

//-----------------------------------------------------




