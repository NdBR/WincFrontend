var API_KEY = "127df04bd9e7981e8444c7e2b5a8c2e7"
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`


const myHeaders = new Headers();

const myRequest = new Request(apiUrl, {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default',
});

async function getData() {
    try {
        const res = await fetch(myRequest)
        console.log("response recieved")
        const response = await res.json()
        return response
    } catch (err) {
        console.log(err)
    }
}


