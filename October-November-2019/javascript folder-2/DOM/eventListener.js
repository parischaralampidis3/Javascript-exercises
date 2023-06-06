 // event listener 
 
 document.querySelector( ".clear-tasks").addEventListener( "mouseover", onClick );

function onClick ( e ){

    //console.log( "clicked" );

    let val;

    //val = e; 

    val = e.target;

    val = e.target.className;

    val = e.target .id;

    val  = e.target.classList;


    
  //e.target.innerText = "hello";


  val  = e.type;

  //timeStamp 

  val = e.timeStamp;


  //coords event relative to the window

  val  = e.ClientY;

  val = e.ClientX;
  

  //coords event relatie in the element 

  val = e.offsetY;

  val = e.offsetX;



    console.log( val ); 






    e.preventDefault;

}




