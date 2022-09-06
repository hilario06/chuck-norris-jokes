import APIRequest from '../utils/config/config';

export function getRandomChuckNorrisJoke() {
  return APIRequest.get('/random', {
    validateStatus: function (status) {
      return status < 500 // Resolve only if the status code is less than 500
    }
  }); // https://api.chucknorris.io/jokes/random
}
