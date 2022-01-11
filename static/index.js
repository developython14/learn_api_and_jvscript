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

function change() {
    var bel = document.getElementById('alge');
    mom = [bel.value ,bel.value ];
    console.log(mom)
    console.log(JSON.stringify(mom))
    fetch('http://127.0.0.1:5000/changex' , {
        method:'POST',
        credentials:"include",
        body: JSON.stringify(mom),
        cache:"no-cache",
        Headers: new Headers({
            "content-type":"application/json"
        })
    }).then((res)=>console.log(res)).catch((err) => console.log(err) )
}

