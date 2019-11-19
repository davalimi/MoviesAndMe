
const API_TOKEN = "3eb3cb3799ecc6ebdaf32b2c26f3c2f8";

export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text + '&page=' + page 

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id) {
  const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=en'

  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.error(error)) 

}