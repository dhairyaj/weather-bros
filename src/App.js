import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import LocationAndTime from "./components/LocationAndTime";
import Search from "./components/Search";
import TemperatureDetails from "./components/TemperatureDetails";
import getFormattedData from "./services/weatherServices";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // Set default city to Tokyo
  const [query, setQuery] = useState({ q: 'Tokyo' });

  // Empty weather state
  const [weather, setWeather] = useState(null);

  // Set default unit to metric (Celsius)
  const [units, setUnits] = useState("metric");

  // Trigger API fetch as soon as the component mounts and every time the query changes (a city is searched)
  useEffect(() => {
    const fetchWeather = async () => {

      // Create toast message
      const toastMessage = query.q ? query.q : "Current Location";
      toast.info("Fetching Weather for " + toastMessage);

      await getFormattedData({ ...query }).then(data => {

        // send toast after successful fetch
        toast.success(`Weather fetched successfully for ${data.name}, ${data.country}`);
        setWeather(data);
      })
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="max-w-screen-lg mx-auto mt-6 py-4 px-32 bg-gradient-to-tr from-cyan-800 to-slate-500 h-fit shadow-2xl shadow-slate-700 rounded-3xl overflow-hidden">

      <Search setQuery={setQuery} units={units} setUnits={setUnits} />

      {/* if api call is successful display the components */}
      {weather && (
        <div>
          <LocationAndTime weather={weather} />
          <TemperatureDetails weather={weather} units={units} />

          <Forecast title="Hourly Forecast" weather={weather.hour} units={units} />
          <Forecast title="Daily Forecast" weather={weather.forecastday} units={units} />
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        draggable
        theme="dark"
      />

    </div>
  );
}

export default App;
