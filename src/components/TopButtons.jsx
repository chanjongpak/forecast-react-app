import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      name: "Toronto",
    },
    {
      id: 2,
      name: "Washington",
    },
    {
      id: 3,
      name: "Seoul",
    },
    {
      id: 4,
      name: "Tokyo",
    },
    {
      id: 5,
      name: "Amsterdam",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
