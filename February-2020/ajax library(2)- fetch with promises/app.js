//initialize a new http object
const http = new EasyHTTP();

//get users

http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

//make an http post request
//user data
const data = {
  name: "Paris Charalampidis",
  username: "parou35",
  email: "parou.char@gmail.com"
};
//create post
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
//update post
