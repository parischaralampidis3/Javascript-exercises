const quoteBtn = document.getElementById("quoteButton");

quoteBtn.addEventListener("click", loadQuote);

function loadQuote(e) {
  //console.log("hit");
  //instatiate a new object
  const xhr = new XMLHttpRequest();
  //set open property here/
  xhr.open(
    "GET",
    "https://api.whatdoestrumpthink.com/api/v1/quotes/random",
    true
  );
  //set on load property

  xhr.onload = function() {
    if (this.status === 200) {
      //console.log(this.responseText);
      const trump = JSON.parse(this.responseText);
      //console.log(trump.message);
      let output = " ";

      output += `      
      <ul>
      <h1>${trump.message}</h1>
      </ul>
      `;
      document.querySelector("#trumput").innerHTML = output;
    }
  };
  //set send property
  xhr.send();
  e.preventDefault();
}
