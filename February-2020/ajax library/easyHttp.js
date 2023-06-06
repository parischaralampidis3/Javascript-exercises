function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//make an http get request
easyHTTP.prototype.get = function(url) {
  this.htttp.open("GET", url, true);
  this;
};
//make an http post request

//make an http put request

//make an http delete request
