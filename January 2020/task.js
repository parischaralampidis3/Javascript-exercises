//alert('connected..')

const button = document.getElementById('taskButton');
const ul = document.getElementById('ulContainer');
const removeBtn = document.getElementById('removeButton')

button.addEventListener('click',buttonFunc);
//set a listener for add button
function buttonFunc(){
   const task = document.getElementById('taskInput').value;
   let addText = document.createTextNode(task);

   const li = document.createElement('li');
   li.appendChild(addText);
   li.classList = 'liElement';
   ul.appendChild(li);
  console.log(li);
  console.log(task);
  
 
}
//set a listener for remove button 

removeBtn.addEventListener('click',removeFunc);

function removeFunc( ){
   console.log('remove')
document.getElementsByClassName('liElement').remove();



}




