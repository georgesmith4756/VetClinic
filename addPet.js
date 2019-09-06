

function handleClickPage() {
    location.href = 'homePage.html'
}


function addPet(formEL) {
    
    console.log('Form Submitted');


    const formData = {};
    for (let element of formEL.elements) {
        if (element.id != "") {
            formData[element.id] = element.value;
        }
    }

    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        /*handle response*/
        console.log(xhr.status, xhr.response);
    };
    xhr.open(
        'POST',
        'http://localhost:9966/petclinic/api/pets');
        xhr.setRequestHeader('Content-Type', 'application/json');
        //
        xhr.send();

        return false;
}





let printy = (request) => {
    console.log(request.status, request.response)
}

function addPet() {
    let method = "POST";
    let url = 'http://localhost:9966/petclinic/api/pets';
    let callback = printy;
    let headers = {
        "Content-Type": "application/json"
    }
    httpRequest(method, url, callback, headers);
}

