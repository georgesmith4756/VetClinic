



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

