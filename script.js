function getOwners() {
  const app = document.getElementById('root')
  const container = document.createElement('div')
  container.setAttribute('class', 'container')

  app.appendChild(container)

  var request = new XMLHttpRequest()
  request.open('GET', 'http://localhost:9966/petclinic/api/owners', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    const card = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.textContent = "List of Owners: ";
    card.appendChild(h1);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(owner => {


      
      card.setAttribute('class', 'card');

      const bootDiv = document.createElement('div');
      bootDiv.className = "container";
      bootDiv.style = "border:1px solid #cecece;";

      const id = document.createElement('h4');
      id.textContent = "ID: " + owner.id;

      const firstName = document.createElement('h4');
      firstName.textContent = "First Name: " + owner.firstName;

      const lastName = document.createElement('h4');
      lastName.textContent = "Last Name: " + owner.lastName;

      const address = document.createElement('h4');
      address.textContent = "Address: " + owner.address;

      const city = document.createElement('h4');
      city.textContent = "City: " + owner.city;

      const telephone = document.createElement('h4');
      telephone.textContent = "Telephone: " + owner.telephone;
      
     
      
      bootDiv.appendChild(id);
      bootDiv.appendChild(firstName);
      bootDiv.appendChild(lastName);
      bootDiv.appendChild(address);
      bootDiv.appendChild(city);
      bootDiv.appendChild(telephone);


      container.appendChild(bootDiv);
     
    })
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `it's not working`;
    app.appendChild(errorMessage);
  }
}

request.send();
}

let ids = [];
function getID() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:9966/petclinic/api/owners', true)
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    if (xhr.status >= 200 && xhr.status < 400) {
      data.forEach(owner => {
        ids.push(owner.id);
      });
    } else {
      console.log('no id');
    }

  }
  xhr.send();
}


function addOwner() {
  const xhr = new XMLHttpRequest();
  let name = document.getElementById('firstName').value;
  let lastname = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let city = document.getElementById('city').value;
  let number = document.getElementById('number').value;

  let json = JSON.stringify({
    "address": `${address}`,
    "city": `${city}`,
    "firstName": `${name}`,
    "id": 0,
    "lastName": `${lastname}`,
    "telephone": `${number}`,
    "pets": []
  });

  console.log(json);
  xhr.open('POST', 'http://localhost:9966/petclinic/api/owners', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.response);
    if (xhr.status == 201) {
      getOwners();
    } else {
      document.getElementById('Error').innerHTML = 'Oops... something went wrong!'
    }
  }
  getOwners();
  xhr.send(json);
  // return false;
}


function viewSingleOwner(){
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container)
const input = document.createElement("input");
const button2 = document.createElement("button");
button2.setAttribute('id', 'singleButton');
button2.innerHTML = "Submit";
button2.addEventListener("onclick", getSingleUser(input.value));
container.appendChild(input);
container.appendChild(button2);
}

function getSingleUser(value){

    alert(value);

    var request = new XMLHttpRequest()
    request.open('GET', 'http://localhost:9966/petclinic/api/owners', true)

    request.onload = function() {
    var data = JSON.parse(this.response);

    const h1 = document.createElement('h1');
    h1.textContent = "Viewing Single Owner: ";
    
    const app = document.getElementById('root');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    const card = document.createElement('div');
    card.appendChild(h1);

  
  
    if (request.status >= 200 && request.status < 400) {
      data.forEach(owner => {
        
        if(owner.id = value){
        card.setAttribute('class', 'card');
  
        const bootDiv = document.createElement('div');
        bootDiv.className = "container";
        bootDiv.style = "border:1px solid #cecece;";
  
        const id = document.createElement('h4');
        id.textContent = "ID: " + owner.id;
  
        const firstName = document.createElement('h4');
        firstName.textContent = "First Name: " + owner.firstName;
  
        const lastName = document.createElement('h4');
        lastName.textContent = "Last Name: " + owner.lastName;
  
        const address = document.createElement('h4');
        address.textContent = "Address: " + owner.address;
  
        const city = document.createElement('h4');
        city.textContent = "City: " + owner.city;
  
        const telephone = document.createElement('h4');
        telephone.textContent = "Telephone: " + owner.telephone;
        
       
  
        bootDiv.appendChild(id);
        bootDiv.appendChild(firstName);
        bootDiv.appendChild(lastName);
        bootDiv.appendChild(address);
        bootDiv.appendChild(city);
        bootDiv.appendChild(telephone);
  
  
        container.appendChild(bootDiv);
       
        }
    })
        }else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `it's not working`;
      app.appendChild(errorMessage);
    }

}

    
  request.send();
  
}

const formDataObj = {};
function handleSubmit(form) {
   for (let element of form.elements) {
       formDataObj[element.id] = element.value;
   }
   console.log(formDataObj);
   visitsForPet();
   return false;
}
function visitsForPet() {
   let method = "GET";
   let url = 'http://localhost:9966/petclinic/api/visits';
   let callback = print;
   let headers = {"Content-Type": "application/json"};
   httpRequest(method, url, callback, headers);
}
function print(data) {
   data = JSON.parse(data.response);
   for (let i = 0; i < data.length; i++) {
       if (data[i].pet.name == formDataObj['petName']) {
           console.log(data[i].description);
           alert(data[i].description);
       }
   }
}
  

