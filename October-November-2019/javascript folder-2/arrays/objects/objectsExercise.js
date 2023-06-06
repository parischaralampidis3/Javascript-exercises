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

//console.log( movies );



movies.forEach( function(value){



    if(value.hasWatched !== true ){

    console.log(`You have not watched ${value.title}  -  ${value.rating}` );
  
}

    else{
        
        console.log(`You have watched  ${value.title} - ${value.rating} `);
    }
});

//Thank you!