//get posts
//instatiate object
let http = new easyHTTP();
/*
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(`error: ${err}`);
  } else {
    console.log(posts);
  }
});
*/
//post
//create data request

const data = {
  title: "Custom Post",
  body: "This is a custom post"
};
//create posts
http.post("https://jsonplaceholder.typicode.com/posts", data, function(
  err,
  post
) {
  if (err) {
    console.log(`error ${err}`);
  } else {
    console.log(post);
  }
});

//put

http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(
  err,
  post
) {
  if (err) {
    console.log(`err${err}`);
  } else {
    console.log(post);
  }
});

//delete

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(`error: ${err}`);
  } else {
    console.log(response);
  }
});
