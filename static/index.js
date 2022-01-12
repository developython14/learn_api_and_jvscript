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

async function change() {
    const entry = {'mus':'elhmdoulah i foound it' ,"belk":125}
    const response =  await fetch('/changex' , {
        method:'POST',
        credentials:"same-origin",
        body: JSON.stringify(entry),
        cache:'no-cache',
        mode: 'cors',
        redirect: 'follow',
        headers: {
            'content-type':'application/json'
        },
        referrerPolicy: 'no-referrer'});
    return response.json();
}

