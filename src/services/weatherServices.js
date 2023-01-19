const BASE_URL = "http://api.weatherapi.com/v1";

// http://api.weatherapi.com/v1/current.json?key=c207019ff0f743568b8193942231901&q=London
// http://api.weatherapi.com/v1/forecast.xml?key=c207019ff0f743568b8193942231901&q=London&days=7

const weatherData = (queryParams) => {
    const url = new URL(BASE_URL + "/forecast.json");
    url.search = new URLSearchParams({ key: process.env.REACT_APP_API_KEY, ...queryParams, });

    return fetch(url).then(res => res.json()).then(data => data);
};

// const getFormattedWeatherData = () => {

// };

export default weatherData;