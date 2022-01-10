const api_url = 'https://www.breakingbadapi.com/api/characters' ; 


async function getdata() {
    const response = await fetch(api_url);
    const data = await response.json();
    const toma = data.map(m => m.name)
    console.log(toma)
}

getdata();