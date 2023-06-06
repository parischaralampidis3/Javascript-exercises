//refer app elements from html
const chuckButton = document.querySelector(".get-jokes");
//add an event listener
chuckButton.addEventListener("click", loadJoke);

function loadJoke(e) {
  //console.log("joke generated");
  const numberInput = document.querySelector("#number").value;
  //console.log(numberInput);

  //instatiate our object
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${numberInput}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      //const response = this.responseText;

      //we need to transform json string to object
      const response = JSON.parse(this.responseText);

      //const jokeList = document.querySelectorAll('.jokes');
      let output = "";
      if (response.type === "success") {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something went wrong</li>";
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };
  xhr.send();
  //prevent from submitting

  e.preventDefault();
}

console.log(chuckButton);
