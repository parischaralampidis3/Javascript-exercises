

const form = document.querySelector( 'form' );

 const taskInput = document.getElementById( "task" );


 //clear input 


taskInput.value = " ";




//keyboard events

//taskInput.addEventListener ( "keypress", runEvent );
//taskInput.addEventListener ( "keyup", runEvent );
//taskInput.addEventListener ( "keydown", runEvent );

taskInput.addEventListener ( "copy", runEvent );
taskInput.addEventListener ( "paste", runEvent );
taskInput.addEventListener ( "cut", runEvent );


taskInput.addEventListener ( "focus", runEvent );

taskInput.addEventListener ( "blur", runEvent );

//adds every action we type

taskInput.addEventListener ( "input", runEvent );








//submit event

 //form.addEventListener ( "submit", runEvent );


 function runEvent( e ){

    //get input value
     console.log ( `type: ${e.type} `);

     //print value
     console.log(taskInput.value);

     //prints whatever i type

     console.log ( taskInput.target.value);

     //prevent from redirect our result

    e.preventDefault();


 }










































