import { DateTime } from "luxon"; //for formatting the date and time

const BASE_URL = "http://api.weatherapi.com/v1";

// To construct the URl and fetch the weather data
const weatherData = async (queryParams) => {
    const url = new URL(BASE_URL + "/forecast.json");
    url.search = new URLSearchParams({ key: process.env.REACT_APP_API_KEY, ...queryParams, days: 14 });

    const res = await fetch(url);
    return await res.json();
};

// To extract the required data from the data received after the successful API call
const weatherDataFormat = (data) => {
    const {
        location: { name, country, tz_id, localtime_epoch },
        current: { temp_c, temp_f, condition: { text, icon }, wind_kph, wind_mph, humidity, feelslike_c, feelslike_f },
    } = data;

    let {
        forecast: { forecastday }
    } = data;

    // To extract the values for the hourly forecast
    let { hour } = forecastday[0];

    hour = hour.map(element => {
        return {
            time: formatToLocalTime(element.time_epoch, tz_id, 'hh:mm a'),
            condition: element.condition.icon,
            text: element.condition.text,
            temperature_c: element.temp_c,
            temperature_f: element.temp_f
        }
    });

    const {
        day: { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f },
        astro: { sunrise, sunset },
    } = forecastday[0];

    // To extract the values for the daily forecast
    forecastday = forecastday.slice(1, 14).map(element => {
        return {
            time: formatToLocalTime(element.date_epoch, tz_id, 'LLL dd'),
            condition: element.day.condition.icon,
            text: element.day.condition.text,
            temperature_c: element.day.avgtemp_c,
            temperature_f: element.day.avgtemp_f
        }
    });

    return { name, country, tz_id, localtime_epoch, temp_c, temp_f, text, icon, wind_kph, wind_mph, humidity, feelslike_c, feelslike_f, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, sunrise, sunset, forecastday, hour }
};

// To get the data based on the query parameters and the final dat format parameters
const getFormattedData = async (queryParams) => {
    const formattedWeatherData = await weatherData(queryParams).then(weatherDataFormat);

    return formattedWeatherData;
};

// Format the Date and Time using the Luxon library
const formatToLocalTime = (secs, zone, foramt = "cccc, dd LLL yyyy' | Local Time : 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(foramt);

export default getFormattedData;

export { formatToLocalTime };