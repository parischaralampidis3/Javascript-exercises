//create a constructor
function easyHTTP() {
  //instatiate a new object
  this.http = new XMLHttpRequest();
}

//prototype methods
//make an http get request
easyHTTP.prototype.get = function(url, callback) {
  //add open property
  this.http.open("GET", url, true);
  //add onload property
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, console.log(self.http.responseText));
    } else {
      console.log("Error", self.http.status);
    }
  };
  //add send
  self.http.send();
};
//make an http post request
easyHTTP.prototype.post = function(data, url, callback) {
  //add open property
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
//make an http put request

//make an http delete request
