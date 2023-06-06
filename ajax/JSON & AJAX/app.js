//alert("connected");
//refer on html buttons
const customersBtn = document.getElementById("button2");

const customerBtn = document.getElementById("button1");

const customersOutput = document.getElementById("customers");

const customerOutput = document.getElementById("customer");
// add a listener fot customers button
customersBtn.addEventListener("click", loadCustomers);

customerBtn.addEventListener("click", loadCustomer);

//load customer function
function loadCustomer(e) {
  //instatiate new object
  const xhr = new XMLHttpRequest();
  //open property
  xhr.open("GET", "customer.json", true);
  //onload property
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      //customersOutput.innerHTML = this.responseText;
      output = ` <ul>
          
          <li>name:${customer.name}</li>
          <li>phone number:${customer.phoneNumber}</li>
        </ul>`;

      customerOutput.innerHTML = output;
    }
  };
  //send property
  xhr.send();
  e.preventDefault();
}

//load customers function
function loadCustomers(e) {
  //instatiate new object
  const xhr = new XMLHttpRequest();
  //open property
  xhr.open("GET", "customers.json", true);
  //onload property
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      const customers = JSON.parse(this.responseText);

      let output = " ";

      //customersOutput.innerHTML = this.responseText;
      customers.forEach(customer => {
        output += `
        <ul>
          
          <li>name:${customer.name}</li>
          <li>phone number:${customer.phoneNumber}</li>
        </ul>
      `;
        customersOutput.innerHTML = output;
      });
    }
  };
  //send property
  xhr.send();
  e.preventDefault();
}
