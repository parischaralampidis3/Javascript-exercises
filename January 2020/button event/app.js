//alert('connected');

const buttonRef = document.getElementById('eventButton');
const removeRef = document.getElementById('removeButton')
const ulContainer = document.querySelector('#container');


buttonRef.addEventListener('click',(e)=>{

 //   console.log(e.target);
    const li = document.createElement('li');
    //i added a class on list element
    li.classList = "listElement";
    //i added a text inside list element
    li.textContent = 'Add a new thing to do';
    ulContainer.appendChild(li);
    
    console.log(li);

}
);

removeRef.addEventListener('click',(e)=>{
    console.log(e.target);
   
li.remove();
}
);

//console.log(ulContainer);

