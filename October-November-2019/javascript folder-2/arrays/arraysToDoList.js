

let todos = new Array() ;

window.setTimeout( function(){

let input = prompt( "What would you like to do?" );



while( input !== "quit"){


if( input === "list" ){
    
    listToDos();

   
}

else if( input === "new" ){

addToDos();


}else if( input==="delete"){

 deleteToDos();
}
input = prompt( "What would you like to do?" );

}
console.log("app quited!");

},500);





function listToDos(){

    todos.forEach( function(todo,i){

        console.log( "*****************");
        console.log(`${i} : ${todo}`);
      
    } );

    console.log(todos);
}


function addToDos(){


    let newDo = prompt('add a task');

    todos.push( newDo );

    console.log( todos);


}

function deleteToDos(){
    let index = prompt( "which index would you like to delete?");

    todos.splice(index, 1);
    console.log( "task deleted!");
}
