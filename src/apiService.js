const APP_ID = process.env.REACT_APP_WEATHER_MAP_APP_ID;

export function getWeatherByName(cityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`)
    .then(response => response.json())
    .catch(err => {
      console.log(err, 'summat went wrong - name not found')
    })
  };

export function getWeatherByCoordinates(lat, long) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APP_ID}`)
    .then(response => response.json())
    .catch(err => console.log(err, 'summat went wrong - coordinates not found'))
};
