

//immediately invokable fuction expression 
//it's a function that you declare and run at the same time

/*

( function(){

    console.log( " IIFE ran..");

} ) ();

*/

( function ( name ){

    console.log(` my name is  ${name}`);


}) ("Paris");




 // property methods






 const toDo = {

    add: function(){

        console.log(" Add.todo.. ");
    }, 
    edit: function(id){
        console.log( `edit to do ${id}`);
    }
 }

 toDo.delete = function(){
     
    console.log( "delete to do" );


 }
 toDo.delete();




 toDo.add();
 toDo.edit(22);