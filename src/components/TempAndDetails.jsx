import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Raining</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°C</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">50%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">12 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light ml-1">
          Rise: <span>06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light ml-1">
          Set: <span>06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light ml-1">
          High: <span>35°C</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light ml-1">
          Low: <span>22°C</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TempAndDetails;
