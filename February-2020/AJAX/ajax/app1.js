//create a listener for the button
document.getElementById("button").addEventListener("click", loadData);

//create a function to listen for click button
function loadData() {
  //instatiate an XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  //open property
  xhr.open("GET", "data.txt", true);
  //add a load function
  xhr.load = function() {
    //set a condition for successful request transaction
    if (this.status === 200) {
      console.log(this.reesponseText);
    }
  };
  //add a property to send request to the
  xhr.send();
}
