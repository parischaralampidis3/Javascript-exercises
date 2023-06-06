
const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
      image :'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      image : 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
    }
  ];
  
const alreadyRead =true;
const authorOne = document.querySelector('.firstAuthor');
const authorTwo = document.querySelector('.secondAuthor');

const titleOne = document.querySelector('.firstTitle');
const titleTwo = document.querySelector('.secondTitle');

const ulListOne = document.querySelector('.firstListContainer');
const liList = document.querySelector('.firstList');

const firstLi = document.querySelector('.firstSection');
const secondLi = document.querySelector('.secondSection');

const ulListTwo = document.querySelector('.secondListContainer');

/*iterate through object properties */


for(let i=0; i<books.length; i++){

  if(alreadyRead!==books[0]['alreadyRead']){
 authorOne.textContent=books[0]['author'];
  titleOne.textContent=books[0]['title'];
 ulListOne.style.background='red';
 ulListOne.style.padding='30px';
  }
 if( alreadyRead==books[1]['alreadyRead']){
  authorTwo.textContent=books[1]['author'];
  titleTwo.textContent=books[1]['title'];
  ulListTwo.style.background='green';
  ulListTwo.style.padding="30px";
 }
 
  }  

  /* function that loads first cover image */
function imageOneFunc(){
  let img =document.createElement('img');
  img.classList='imageSize';
  img.src=books[0]['image'];
  firstLi.appendChild(img);
  ulListOne.appendChild(firstLi);
}
imageOneFunc();

function imageTwoFunc(){
  let img =document.createElement('img');
  img.classList='imageSize';
  img.src=books[1]['image'];
secondLi.appendChild(img);
  ulListTwo.appendChild(secondLi);
}
imageTwoFunc();
