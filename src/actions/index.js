import axios from 'axios';

const API_KEY = '3b4076562bbc0c908a8d3373ffee3b92';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  // axios returns a promise - the promise does not contain any data
  // console.log("Request:", request)

  return {
    type: FETCH_WEATHER,
    payload: request
    // we return the promise as the payload
  };
}

// redux promise is a middleware that sees that the payload is a promise and stops the action until the promise resolves then creates a new action with payload being the response from the promise and sends that to the reducer. It unwraps the promise
