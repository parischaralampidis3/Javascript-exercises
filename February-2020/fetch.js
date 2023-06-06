let chuckJoke;

fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  // .then(data => {
  // console.log(data);
  .then(json => document.write(json.value));
