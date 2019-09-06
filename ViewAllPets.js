let getElements = (request) => {
    let info = request.response;
    formEL = getElementsByID("FormEL");
    for(let element of formEl.elements) {
        if(element.id) {
            formData[element.id] = element.value;
        }
    }
}

function viewPets(id){
    let method = "GET";
    let url = "http://localhost:9966/petclinic/api/owners/" + id;
    let callback = getElements;
    let headers = {
        "Accept": "application/json;charset=UTF-8"
    }    
    httpRequest(method, url, callback, headers);

}