let display = document.getElementById("displayApi");

let spaceApiData;

fetch("http://api.open-notify.org/astros.json")
  .then(res => res.json())
  .then(data => (spaceApiData = data))
  .then(() => formatData());

function formatData() {
  let ul = document.createElement("ul");
  let lis = document.createElement("li");

  ul.appendChild(lis);
  display.appendChild(ul);

  for (let i = 0; i < spaceApiData.people.length; i++) {
    console.log(spaceApiData.people[i]);

    let lis = document.createElement("li");
    ul.appendChild(lis);
    lis.innerHTML = spaceApiData.people[i].name;
  }

  console.log(ul);

  console.log(spaceApiData);
  console.log(spaceApiData.people[0]);
  console.log(spaceApiData.people[0].name);
}
