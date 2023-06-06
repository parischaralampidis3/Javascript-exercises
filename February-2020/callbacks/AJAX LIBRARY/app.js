const http = new easyHTTP();

// GET POSTS
/*
http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
  console.log(posts);
});
*/
//create data
const data = {
  title: "custom post",
  body: "this is a custom post"
};

http.post("https://jsonplaceholder.typicode.com/posts", data, function() {
  if (err) {
    console.log(`error ${err}`);
  } else {
    console.log(post);
  }
});
