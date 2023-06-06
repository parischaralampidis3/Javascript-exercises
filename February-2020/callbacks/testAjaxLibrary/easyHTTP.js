//set constructor
function easyHTTP() {
  //instatiate a new object
  this.http = new XMLHttpRequest();
}

//set a prototype

//get
easyHTTP.prototype.get = function(url, callback) {
  //set an open property
  this.http.open("GET", url, true);

  //declare a variable for this object
  let self = this;
  //set an onload property
  this.http.onload = function() {
    //set a convention for checking error
    if (self.http.status === 200) {
      callback(null, console.log(self.http.responseText));
    } else {
      console.log("error", self.http.status);
    }
  };
  //set a send property
  self.http.send();
};
//post
//we add data as a parameter on post prototype because we need to send the data
easyHTTP.prototype.post = function(url, data, callback) {
  //set an open property
  this.http.open("POST", url, true);
  //set an onload property
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  //set a send property
  this.http.send(JSON.stringify(data));
};

//put
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
//delete

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);
  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(console.log(null, "post deleted"));
    } else {
      callback(`error: ${self.http.status}`);
    }
  };
  this.http.send();
};
