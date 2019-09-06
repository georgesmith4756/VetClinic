let getElements = (request) => {
    let info = JSON.parse(request.response);
    let list = document.getElementById("listOfPets");
    for(let owner of info) {
        for (let pet of owner.pets){
            let firstName = owner.firstName;
            let name = pet.name;
            let birthDate = pet.birthDate;
            bulletPoint = document.createElement("li")
            bulletPoint.innerText = "Owner: " + firstName + " Pet: " + name + " Pet's birthdate: " + birthDate;
            list.appendChild(bulletPoint);
        }
    }
}

function viewPets(){
    let method = "GET";
    let url = "http://localhost:9966/petclinic/api/owners/" ;
    let callback = getElements;
    let headers = {
        "Accept": "application/json;charset=UTF-8"
    }    
    httpRequest(method, url, callback, headers);

}