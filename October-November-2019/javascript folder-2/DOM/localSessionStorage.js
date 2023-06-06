

//set local storage item
/*
localStorage.setItem( "info", "Paris" );
localStorage.setItem( "age", 36 );


*/
//remove from storage
//localStorage.removeItem("info");


//get from storage 

//const name = localStorage.getItem( "info" );

//const age = localStorage .getItem( 'age' );




//clear items 

//localStorage.clear();


//console.log( name, age );

//set session storage item


//session storage value won't stay if we close the browser







const task = document.querySelector( "form" );

task.addEventListener( "submit", runEvent );

function runEvent(e){

    const task = document.getElementById('task').value;

    let tasks;

    //console.log( task );

    if( localStorage.getItem( "tasks") === null){

        tasks = []
    }else{

    tasks = JSON.parse( localStorage.getItem( 'tasks' ));

    }

    tasks.push( task );

    localStorage.setItem("tasks", JSON.stringify( tasks ) );



    alert( "task saved");

    e.preventDefault();

};

console.log (task);


const tasks = JSON.parse(localStorage.getItem( "tasks" ));

tasks.forEach( function (task) {
    
    console.log( task); 
    
});