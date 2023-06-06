//refer button
let btn = document.getElementById("button");
const container = document.querySelector("#output");
//add a listener
btn.addEventListener("click", loadData);

function loadData() {
  //instatiate an object
  let xhr = new XMLHttpRequest();
  //open
  xhr.open("GET", "data.txt", true);
  //load
  xhr.onload = function() {
    if (this.status === 200) {
      //console.log(this.responseText);
      //you need to display element on
      //html
      const statement = document.createElement("h1");
      statement.innerHTML = this.responseText;
      container.appendChild(statement);
    }
  };
  //on error
  xhr.onerror = function() {
    console.log("request error");
  };
  //send
  xhr.send();
  // console.log(xhr);
}

console.log(btn);
