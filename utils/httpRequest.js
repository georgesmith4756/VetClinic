function httpRequest(method, url, callback, headers, body) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = () => {
        callback(request);
    }
    for (key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
    body ? request.send(body) : request.send();
}