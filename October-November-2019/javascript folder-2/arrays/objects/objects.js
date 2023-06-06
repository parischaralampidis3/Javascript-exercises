//literal objects 
/*
let val;

const person = {

    firstName  : "Paris",
    lastName  : "Charalampidis",
    age : 35,
    married :  false,
    hobbies : [ "drawing","cycling","music"],
    getBirthYear : function(){

     return 2019 - this.age;

    }

}


val = person.firstName;
val = person.lastName;
val = person.age;
val = person.getBirthYear();
val = person.hobbies[1];
console.log(val);

*/


//----------------------------------

/*

const people = [

    { name : "Paris", age : 35 },
    { name : "Nefeli", age : 30},
    { name : "Marina", age : 60}

];

*/

/*
for ( let i = 0;  i < people.length; i++){
    console.log(people[i].name)
}

*/



//--------------------------------------------



    let movies = [

    {
      title: "The frozen",
      rating: 3,
      hasWatched:true
    },

    
    {
        title: "The Godfather",
        rating: 5,
        hasWatched:false
      },

      
    {
        title: " The Joker",
        rating: 5,
        hasWatched:false
    }
]

console.log( movies );



movies.forEach( function(value){



    if(value.hasWatched !== true ){
    console.log(`You have not watched ${value.title}  -  ${value.rating}` );
    }

    else{
        console.log(`You have watched  ${value.title} - ${value.rating} `);
    }
});





/*
//movieReview.title;
let arr = movie

for ( let i=0; i <arr.length; i++ ){
   
     console.log( arr[i]);
    } 
  





console.log( movie);
*/