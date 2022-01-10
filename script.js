const api_url = 'https://www.breakingbadapi.com/api/characters' ; 


async function getdata() {
    const response = await fetch(api_url);
    const data = await response.json();
    const toma = data.map(m => m.name)
    put(toma);
}

function put(data){
    var sel = document.querySelector('#sel')
    for (let element of data) {
        sel.innerHTML = sel.innerHTML+  `<option selected>${element}</option>`
    }
}

getdata();
async function getchar(element){
    var sel = document.querySelector('#oper')
    const response = await fetch(api_url + '?name=' + element);
    const data = await response.json();
    sel.innerHTML =  `<h2> ${data[0].name} </h2>
    <h4> ${data[0].portrayed} </h4>
    <img src="${data[0].img}" alt="..." width= 250px>
    `
}

