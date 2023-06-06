async function fetchUsers() {
  //await response of the fetch call
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  //only proceed once its resolved
  const data = await response.json();
  //only proceed once the second promise is resolved
  return data;
}
fetchUsers().then(users => console.log(users));

/*
async function returnApi() {
  try {
    let response = await fetch("https://ghibliapi.herokuapp.com/films");

    let films = await response.json();
    return films;
  } catch (err) {
    alert(err);
  }
}
returnApi().then(films => console.log(films));
*/
