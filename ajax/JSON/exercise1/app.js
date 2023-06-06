//alert("connected");
//add listener for button
let btn = document.querySelector("#button");

btn.addEventListener("click", loadData);

function loadData() {
  //create an xhr object
  let xhr = new XMLHttpRequest();
  //add an open property
  xhr.open("GET", "data.txt", true);
  //console.log(xhr.readyState);
  //add an on load property
  xhr.onload = function() {
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById("output").innerHTML = this.responseText;
    }
  };
  xhr.onerror = function() {
    console.log("error");
  };
  //add a send property
  xhr.send();
}
