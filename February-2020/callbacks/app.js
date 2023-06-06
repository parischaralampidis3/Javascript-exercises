//callbacks
/*
//synchronous way

//create an array of object posts
const posts = [{ title: "this is post One" }, { title: "this is post Two" }];

//create two functions for create and get posts

//function create posts

function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}

//function get posts

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post Three" });
getPosts();
*/

//asynchronous way

//create an array of object posts
//const posts = [{ title: "this is post One" }, { title: "this is post Two" }];

//create two functions for create and get posts

//function create posts

//create an array of object posts
const posts = [{ title: "this is post One" }, { title: "this is post Two" }];

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    //set callback as a function
    callback();
  }, 2000);
}

//function get posts

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post Three" }, getPosts);
