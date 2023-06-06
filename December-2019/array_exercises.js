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


  const people = [
                    'Beck, Glenn', 'Becker, Carl',
                    'Beckett, Samuel', 'Beddoes, Mick', 
                    'Beecher, Henry', 'Beethoven, Ludwig', 
                    'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
                     'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
                    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 
                    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
                    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 
                    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank','Birrell, Augustine', 'Black, Elk', 
                     'Blair, Robert', 'Blair, Tony', 'Blake, William'
                    ];




const numbers = [ 3,5,7,50];

//array.prototype.filter();
//1. filter the list of inventors for those who have borned in the 1500's

 const inventorsFiltered = inventor =>{
    return inventor.year <= 1600 ;
 }
let filtered = inventors.filter(inventorsFiltered);
console.log( filtered);

/*
const inventorsFiltered = inventors.filter(inventor =>{return inventor.year <= 1860 ;});
console.log(inventorsFiltered);
 */
//array.prototype.map()
//2. give as an array of the inventory first and last names 

const inventorNames = inventors.map (info =>{return `${info.first} ${info.last}`; });
console.log (inventorNames);

/*
const inventorNames = inventorsFiltered.map (info =>{return `${info.first} ${info.last}`; });
console.log (inventorNames);
*/
//Array.prototype.sort()
//Sort the inventors by birthdate, oldest to youngedst 

 const orderedYears = inventors.sort(function(a,b){
   let birthA = a.year;
   let birthB = b.year;

   if(birthB<birthA ){
      return -1;
   }else if(birthB>birthA){
      return 1;
   }else{
      return 0; 
   }
});
 console.log(orderedYears);

// const orderedYears = inventors.sort((a,b)=>birthB < birthA ? 1 : -1 );

//Array.prototype.reduce()
// how many years did all the inventors live?

const totalYears = inventors.reduce( (acc,inventor)=>{ 
   return acc + (inventor.passed - inventor.year); },0);
console.log(totalYears) ;

/*const reducer  = numbers.reduce((acc,cur) => acc+cur,10);
console.log(reducer);*/


//5.sort the inventors by the years lived

const yearsSorted = inventors.sort(function(a,b){

   const lastGuy = a.passed - a.year ;
   const nextGuy = b.passed - b.year; 


   if(lastGuy> nextGuy){
      return -1;
   } else if(lastGuy<nextGuy){
      return 1;
   }else{
      return 0; 
   }

}
);
console.log(yearsSorted);

/*

https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

  //locate the boulevard list on dom
const category  = document.querySelector(".mw-category");
   //get the links. i used array.from method to get the array of links
const links  = Array.from(category.querySelectorAll("a"));
   //get the list of links 
   // i mapped through the node list to get the array list and then 
   //i filtered through the list to take the strings that contain "de"

const de = links
            .map( link => link.textContent)
            .filter(street => street.includes('de') );
*/

//sort exercise

// sort the people alphabetically by last name 
for( let i=0; i<people.length; i++ ){
   let letter = 'B'
   if(people[i]!==letter){
  
   var words = people[i].split( ' ');
   //console.log(words);
    words.splice(0,1);
  convertToString = words.toString();
   console.log(convertToString);


   }
};

/*

const apha = people.sort((lastOne, nextOne)=>{
   const [aLast, aFirst] = lastOne.split(', ');
   const [bLast, bFirst] = nextOne.split(', ');
   return aLast>bLast ? 1 : -1;
} 
);

*/

const prices = [ 100, 200, 300 ];
 const total = prices.map((x)=>{
   return x*1.24; 
   }
)
console.log(total);

const filterPrices = total.filter(num){

   if(num<100){
      
   }
}




   












//-------------------------------------------


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

