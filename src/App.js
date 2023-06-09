import "./App.css";
import React, { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "toronto" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Getting data for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(`Got weather data for ${data.name}, ${data.country}`);

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "amsterdam" });
    console.log(data);
  };

  fetchWeather();

  const changeBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400
      ${changeBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} />
        </>
      )}

      <ToastContainer autoClose={1500} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
