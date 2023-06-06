document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //create an hxr object
  const xhr = new XMLHttpRequest();

  //open
  xhr.open("GET", "data.txt", true);
  //  console.log("READYSTATE", xhr.readyState);

  // use this for spinnners,loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };
  // we can manipulate the data that we get
  xhr.onload = function() {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
    //error
    xhr.onerror = function() {
      console.log("Request error");
    };
  };
  xhr.send();
}
