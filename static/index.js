const api_url = 'http://127.0.0.1:5000/tomahook' ; 


async function getdata() {
    const response = await fetch(api_url);
    const data = await response.json();
    put(data);
}
function put(data){
    var sel = document.querySelector('#sel')
    for (let element of data) {
        sel.innerHTML = sel.innerHTML+  `<option selected>${element}</option>`
    }
}


getdata();
