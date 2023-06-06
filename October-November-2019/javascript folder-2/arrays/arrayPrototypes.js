// the map() method creates a new array with the results
//of  calling a provided function on every element in 
//calling array.
//you can think of map as a loop that is specifically
//for transforming values. 



  const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];


  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  



  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


  
  const vals = [ 4,9,10,2,1 ];

  const ages = [50,10,8,25,50,];








  // Array.prototype.filter()







  // 1. Filter the list of inventors for those who were born in the 1500's

  /*
 const sumFilt = inventors.filter(function(inventor){

  if(inventor.year >= 1500 && inventor.year < 1600){
    return true;
  }

});

console.table( sumFilt );
*/

const sumFilt = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table( sumFilt);
/*



 //-----without arrow function 

let ageFilter = ages.filter ( age => {

    return age > 18;

});

console.log(ageFilter);


  let fifteen = inventors.filter( function(inventor) {

      if( inventor.year >= 1500 && inventor.year <= 1800 ){

        return true;

      }
    
  });


 //----------------------------------------------

let filtPeop = data.filter (function ( data ){

    if( data.length <= 3 ){
        return true;
    }
});

console.log(filtPeop);

//-----------------------------------------------

  //----------------filter with arrow function--------------------------------

  //------------------------------
  

  let sum = vals.filter(function(vals){

    return vals >= 2; 


  });


*/

/*
let ageFilter =  ages.filter( function (age){
      
          return age >= 18;
} )

console.log(ageFilter);

*/
/*
let ageFilter = ages.filter( age => { return age >= 18;  }) ;
  console.log(ageFilter);
*/

const invNames = inventors.map( inventors =>{ return inventors.first + ' ' + inventors.last});
console.log( invNames);

  //---------------------------------------

  
  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names

  let info = inventors.map (function (inventors){

    return inventors.first + " " +inventors.last;


  });



//--------------------------------------


let modify = function ( x ){

    return x * 2;


}

let result = vals.map( modify );



  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest


const birthSort = inventors.sort(function( a, b ){


  if( a.year > b.year ){
    return 1;
  }
  else if( a.year < b.year){
    return -1;
  }
  else{
    return 0;
  }

})
console.log( birthSort);




/*


const ordered = function( a ,b ){

    if(a.year < b.year ){
        return -1;
    }
    else if(a.year > b.year) {
        return 1;
        
    }
    else {
        return 0;
    }
};
//--------------------------------------

let peopOrder = function ( a , b ){

    if( a > b ){
        return -1;
    }
    else if( a < b){
        return 1; 
    }
    else{
        return 0;
    }
};
*/


  // Array.prototype.reduce()







  // 4. How many years did all the inventors live?







  let reducer = ( accumulator , currentValue ) => accumulator + currentValue;
  
  console.log(vals.reduce(reducer));

  //-------------------------------------------------

const totalYears = inventors.reduce((total, inventor) =>{

  return total + ( inventor.passed - inventor.year);

},0);

console.log(totalYears);






/*
const totalYears = inventors.reduce(( total, inventor ) => {
  return total + ( inventor.passed - inventor.year );
}, 0 );

console.log( totalYears );
*/




  // 5. Sort the inventors by years lived

  


  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name


  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name
  // 8. Reduce Exercise
  // Sum up the instances of each of these






















 

 

//console.table("filter inventors:", fifteen);

 //console.log("filter numbers",sum);





console.log( "print array:", vals );

console.log( "map result:", result );

console.log(info);



//-----------------------------------

 //console.log(inventors.sort(ordered)); 

 //console.log (people.sort(peopOrder));
