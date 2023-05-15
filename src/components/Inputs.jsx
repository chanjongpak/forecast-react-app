import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchButton = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
  };

  const handleLocationButton = () => {
    if (navigator.geolocation) {
      toast.info("Getting user location");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Got Location!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsButton = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl capitalize placeholder:lowercase"
          placeholder="search for a city"
        />
        <UilSearch
          size={25}
          onClick={handleSearchButton}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleLocationButton}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsButton}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsButton}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
