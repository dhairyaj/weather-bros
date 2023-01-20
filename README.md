# Getting started with Weather-Bros
Weather-Bros is a weather application made using React.js and Tailwind CSS. It is powered by <a href="https://www.weatherapi.com/">WeatherAPI</a> which is free to use.   


## Features of Weather-Bros
- Get weather of any city of the world
- Get weather of your current location in a single click
- Get hourly forecast and daily forecast of 2 weeks
- Additional details like Humidity, Wind Speed, Sunrise, Sunset,Max and Min temperature
- Switch between Celsius(metric) and Fahrenheit(imperial) units on the fly
- Carousel view for the hourly weather information

## Libraries and packages used
- <a href="https://reactjs.org/">React.js</a>
- <a href="https://tailwindcss.com/">Tailwind CSS</a>
- <a href="https://www.weatherapi.com/">WeatherAPI</a>
- <a href="https://splidejs.com/guides/getting-started/">Splide</a> (For carousel)
- <a href="https://www.npmjs.com/package/luxon">Luxon</a> (For Time and Date Formatting)
- <a href="https://www.weatherapi.com/">React Icons</a>

## Setting up the project

1. Clone the repository
2. Run `npm install`. Ensure you have node version>=14
3. Go to the <a href="https://www.weatherapi.com/">WeatherAPI</a> and create a free account
4. Create a `.env` file outside src and create a variable `REACT_APP_API_KEY` and paste your API KEY.  
<i>Note: If you had started the server before creating the `.env` file, restart the server. It's important to restart the server after creating the .env file</i>
5. Run `npm start` or `npm run start`   



Feel free to fork the repository and add more details or make the UI more appealing. Sample output for both the endpoints of the API have been included in the repository.


Do star(⭐) the repository if you like it 😊