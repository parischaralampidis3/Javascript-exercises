
/*
function isEven( x ){
    if ( x % 2 === 0 ){

        console.log( true);

    }else{
        
        console.log( false);

    }
}
isEven(21);
 */


function isEven( x ){
    if ( x % 2 !== 1 ){

        console.log( true);

    }else{
        
        console.log( false);

    }
}
isEven(21);



/**--------------------------------- */


function factorial ( num ){

    if( num < 0 ){
        return -1;
    }
    else if( num === 0 ){
        return 1; 
    }
    else{
        return num * factorial( num - 1);
    }
}



console.log( factorial(10));

//------------------------------------


function factorialize( num ){

    if( num === 0 || num === 1){
        return  1;
    }

    for( let i = num -1; i >= 1; i-- ){

        num = num * i ;
    }
    return num;

}

console.log(factorialize( 5 ));
 
//------------------------------------

function kebabToSnake( str ){
    let myString = str.replace( /-/,'_');
    return myString;
}
console.log(kebabToSnake( "blah"));

//----------------------------------------

