const initState = {
  cities: [],
}

const getWeather = cityArray => {
  // cityArray.forEach(oneCity => {    
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityArray}&appid=3f4b891079045d352173506efa88c064`)
    .then(response => response.json())
    .then(data => console.log(data)) //, oneCity
    .catch(err => console.log('summat went wrong'))
  // });
};

const getCityDetails = async (fetchedData, city) => {
  city.country = fetchedData.sys.country;
  city.temp = fetchedData.main.temp;
  city.hum = fetchedData.main.humidity;
  city.press = fetchedData.main.pressure;
  city.feel = fetchedData.main.feels_like;
}

const setItemLocalStorage = (item) => {
  localStorage.setItem('cities', JSON.stringify(item)) 
}

const removeItemLocalStorage = (item) => {
    localStorage.removeItem(item) 
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      // let cities = [...state.cities, action.newCity]
      // getWeather(cities)
      // setItemLocalStorage(cities)
      // console.log('cities', cities)

      let newCity = action.newCity.name
      console.log('newcity', newCity)
      getWeather(newCity)
      setItemLocalStorage(newCity)
      let cities = [...state.cities, newCity]

      return{
        ...state, cities
      }

    case 'DELETE_CITY':
      let newCities = state.cities.filter(city => {
        return action.id !== city.id;
      });
      return{
        ...state, cities: newCities
      };

    default:  
      return state;
  }
}

export default rootReducer;