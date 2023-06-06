let textButton = document.getElementById("button1");
let jsonButton = document.getElementById("button2");
let externalApiButton = document.getElementById("button3");

//get text
textButton.addEventListener("click", getText);
function getText() {
  fetch("test.txt")
    .then(response => response.text())
    .then(data => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(err => err);
}
//get json
jsonButton.addEventListener("click", getJson);
function getJson() {
  fetch("post.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = " ";
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => err);
}
//get from external api
externalApiButton.addEventListener("click", getExternalApi);
function getExternalApi() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = " ";
      data.forEach(user => {
        output += `
      <li>${user.login}</li>
      `;
        document.getElementById("output").innerHTML = output;
      });
    });
}
