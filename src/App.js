import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import LocationAndTime from "./components/LocationAndTime";
import Search from "./components/Search";
import TemperatureDetails from "./components/TemperatureDetails";
import getFormattedData from "./services/weatherServices";

function App() {

  const [query, setQuery] = useState({ q: 'Berlin' });
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query }).then(data => {
        setWeather(data);
      })
    }

    fetchWeather();
  }, [query, units])

  return (
    <div className="max-w-screen-lg mx-auto mt-6 py-4 px-32 bg-gradient-to-tr from-cyan-800 to-slate-500 h-fit shadow-2xl shadow-slate-700 rounded-3xl">

      <Search setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <div>
          <LocationAndTime weather={weather} />
          <TemperatureDetails weather={weather} units={units}/>

          <Forecast title="Hourly Forecast" weather={weather.hour} units={units} />
          <Forecast title="Daily Forecast" weather={weather.forecastday} units={units} />
        </div>
      )}
    </div>
  );
}

export default App;
