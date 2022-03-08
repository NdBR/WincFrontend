// DEEL 1

const getGenresData = async function() {
    const genreData = await getData();
    console.log(genreData.genres)
    return genreData.genres
}


const getNamesAndIdsOfGenres = function(genre) {
    const nameOfGenre = genre.name
    const idofNameOG = genre.id
    return `genre name: ${nameOfGenre}, id: ${idofNameOG}`
}

const addGenreToDom = function(genre) {
    const genreList = document.getElementById("genreList")
    const listItem = document.createElement("li")
    const genreNameID = getNamesAndIdsOfGenres(genre)
    const textNode = document.createTextNode(genreNameID);

    listItem.appendChild(textNode)
    genreList.appendChild(listItem);
}
const showGenres = async function() {
    const genres = await getGenresData()
    genres.map(genre => addGenreToDom(genre));
};

showGenres()

// opdracht 2

const findUrlLionKing = `https://api.themoviedb.org/3/find/tt0110357?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
const findTheJoker = `https://api.themoviedb.org/3/find/tt7286456?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
const findUrlToyStory = `https://api.themoviedb.org/3/find/tt1979376?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
const findUrlFavoFilm = `https://api.themoviedb.org/3/find/tt0133093?api_key=${API_KEY}&language=en-US&external_source=imdb_id`

async function findMovieTitleByID(url) {
    try {
        const res = await fetch(url)
        const response = await res.json()
        return response.movie_results[0].original_title
    } catch (err) {
        console.log(err)
    }
}

// find 3 moviesID and add favorite to the dom
findMovieTitleByID(findUrlLionKing)
findMovieTitleByID(findTheJoker)
findMovieTitleByID(findUrlToyStory)

const addFavoToDom = async function() {
    const h1FavoTitle = document.getElementById("favoFilm")
    const titleFavoMovie = await findMovieTitleByID(findUrlFavoFilm)
    const textNode = document.createTextNode(`Favourite Movie: ${titleFavoMovie}`);
    const h1 = document.createElement("h1")
    h1.appendChild(textNode)
    h1FavoTitle.appendChild(h1);
}
addFavoToDom()

//  add popu movie top 10 
const urlPopu = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_watch_monetization_types=flatrate`;

async function findMovieByDiscover(url) {
    try {
        const res = await fetch(url)
        const response = await res.json()
        console.log("response from api discover popu", response)
        console.log("response from api with .results", response.results)
        return response.results
    } catch (err) {
        console.log(err)
    }
}

const showPopu = async function() {
    const popu = await findMovieByDiscover(urlPopu)
    console.log(popu)
    popu.slice(0, 10)
        .map(movie => addPopuToDom(movie));
};

showPopu()

const addPopuToDom = function(movie) {
    const title = movie.title
    const genreList = document.getElementById("popuList")
    const listItem = document.createElement("li")
    const textNode = document.createTextNode(title);

    listItem.appendChild(textNode)
    genreList.appendChild(listItem);
}
const urlTopActionMovie = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=&include_video=false&page=1&with_watch_monetization_types=flatrate`
const urlPopular1975Movie = `https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=&include_video=false&page=1&with_watch_monetization_types=flatrate&year=1975`
    // const ActionMoviesTop = async function () {
    //     const actionTopR = await findMovieByDiscover(urlTopActionMovie)
    //     const titleMovie = actionTopR[0]
    //     console.log(titleMovie)
    // }
    // ActionMoviesTop(urlTopActionMovie)

const showAction = async function(url) {
    const actionTop = await findMovieByDiscover(url)
    const title = actionTop.slice(0, 10)
        .map(movie => movie.original_title);
    console.log(title)
};

showAction(urlPopular1975Movie)