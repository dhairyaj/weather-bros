import { DateTime } from "luxon";

const BASE_URL = "http://api.weatherapi.com/v1";

// http://api.weatherapi.com/v1/current.json?key=c207019ff0f743568b8193942231901&q=London
// http://api.weatherapi.com/v1/forecast.xml?key=c207019ff0f743568b8193942231901&q=London&days=7

const weatherData = (queryParams) => {
    const url = new URL(BASE_URL + "/forecast.json");
    url.search = new URLSearchParams({ key: process.env.REACT_APP_API_KEY, ...queryParams, days: 8 });

    return fetch(url).then(res => res.json()).then(data => data);
};

const weatherDataFormat = (data) => {
    const {
        location: { name, country, tz_id, localtime_epoch, localtime },
        current: { temp_c, temp_f, condition: { text, icon }, wind_kph, humidity, feelslike_c, feelslike_f },
    } = data;

    let {
        forecast: { forecastday }
    } = data;

    let { hour } = forecastday[0];

    hour = hour.slice(1, 8).map(element => {
        return {
            hourly: formatToLocalTime(element.time_epoch, tz_id, 'hh:mm a'),
            hourlyCondition: element.condition.icon,
            hourlyTemperature_c: element.temp_c,
            hourlyTemperature_f: element.temp_f
        }
    });

    const {
        day: { maxtemp_c, maxtemp_f, mintemp_c, mintemp_f },
        astro: { sunrise, sunset },
    } = forecastday[0];

    forecastday = forecastday.slice(1, 8).map(element => {
        return {
            daily: formatToLocalTime(element.date_epoch, tz_id, 'ccc'),
            dailyCondition: element.day.condition.icon,
            dailyTemperature_c: element.day.avgtemp_c,
            dailyTemperature_f: element.day.avgtemp_f
        }
    });

    return { name, country, tz_id, localtime_epoch, localtime, temp_c, temp_f, text, icon, wind_kph, humidity, feelslike_c, feelslike_f, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f, sunrise, sunset, forecastday, hour }
};

const getFormattedData = async (queryParams) => {
    const formattedWeatherData = await weatherData(queryParams).then(weatherDataFormat);

    return formattedWeatherData;
};

const formatToLocalTime = (secs, zone, foramt = "cccc, dd LLL yyyy' | Local Time : 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(foramt);

export default getFormattedData;

export { formatToLocalTime };