
const API_TOKEN = "3eb3cb3799ecc6ebdaf32b2c26f3c2f8";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
  }

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}