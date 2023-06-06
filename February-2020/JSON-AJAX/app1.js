//refer btn one
const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");

const customerOne = document.querySelector("#customer");
console.log(btnOne);

const customerTwo = document.querySelector("#customers");
//add event listener
btnOne.addEventListener("click", loadCustomer);
btnTwo.addEventListener("click", loadCustomers);
function loadCustomer() {
  //instatiate object
  const xhr = new XMLHttpRequest();
  // open
  xhr.open("GET", "customer.json", true);
  //on load
  xhr.onload = function() {
    if (this.status === 200) {
      //console.log(this.responseText);
      //display on html
      //this is a json string we use parse in order to be able to
      //access properties
      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
            <li>id: ${customer.id}</li>
            <li>name: ${customer.name}</li>
            <li>company: ${customer.company}</li>
            <li>phone: ${customer.phone}</li>
        </ul>
      
      `;
      customerOne.innerHTML = output;
    }
  };
  xhr.send();
}
//load customers
function loadCustomers() {
  //instatiate object
  const xhr = new XMLHttpRequest();
  //open
  xhr.open("GET", "customers.json", true);
  //onload
  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.forEach(customer => {
        output += `
                <ul>
                    <li>id: ${customer.id}</li>
                    <li>name: ${customer.name}</li>
                    <li>company: ${customer.company}</li>
                    <li>phone: ${customer.phone}</li>
                </ul>
            `;
      });
      customerTwo.innerHTML = output;
    }
  };
  xhr.send();
}
