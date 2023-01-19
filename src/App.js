import "./App.css";
import Forecast from "./components/Forecast";
import LocationAndTime from "./components/LocationAndTime";
import Search from "./components/Search";
import TemperatureDetails from "./components/TemperatureDetails";
import weatherData from "./services/weatherServices";

function App() {

  // const fetchWeather = async () => {
  //   const data = await weatherData({q: 'London', days: 7});
  //   console.log(data);
  // }

  // fetchWeather();

  return (
    <div className="max-w-screen-lg mx-auto mt-6 py-4 px-32 bg-gradient-to-tr from-cyan-800 to-slate-500 h-fit shadow-2xl shadow-slate-700 rounded-3xl">

      <Search />

      <LocationAndTime />
      <TemperatureDetails />

      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
