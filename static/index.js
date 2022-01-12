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




// Example POST method implementation:
async function postData(url = '', data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  function change(){
    var bel = document.getElementById('alge');
    var data = {
        'name': bel.value,
        'message': bel.value
      };

  postData('/changex',data)
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}
  