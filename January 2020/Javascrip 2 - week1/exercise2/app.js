//alert('connected');

document.body.style.fontFamily = 'Arial,sans-serif';

const myName = document.getElementById('nickname');
const myFood = document.getElementById('fav-food');
const myHometown = document.getElementById('hometown');
const liList = document.getElementsByTagName('li');
const avatar = document.querySelector('.image-avatar');
console.log(avatar);
/*This function displays image on the top of html file */
function createImage(){
    var image= document.createElement('img');
    image.classList="avatar"
    image.setAttribute('src','http://2.bp.blogspot.com/-dwQ0rdzQV9k/UixwmBy0yxI/AAAAAAAAFqQ/9WkGmQShXCk/s320/Paris+Charalampidis.jpg');
    image.setAttribute('height','200');
    image.setAttribute('width','200');
    image.setAttribute('alt','avatar');
    avatar.appendChild(image);
}
createImage();
/* Display some info on Html file */
myName.textContent='Paris';
myFood.textContent='Spaggeti';
myHometown.textContent='Pireaus';

/*for(let i = 0; i<0; i)*/

for(let i = 0; i<liList.length; i++){
    liList[i].classList="list-item";
}

