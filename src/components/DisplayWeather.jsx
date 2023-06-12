import React from "react";
import "./DisplayWeather.css";
import CelsiusCard from "./CelsiusCard";
import FahrenheitCard from "./FahrenheitCard";

export default function DisplayWeather(props) {
  const { data, unit } = props;
  console.log(data);
  const icon_url = `../images/${data.weather[0].icon}.png`;
  console.log(icon_url);
  //const icon_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="displayweather">
      {unit === "metric" ? (
        <CelsiusCard data={data} icon_url={icon_url} />
      ) : (
        <FahrenheitCard data={data} icon_url={icon_url} />
      )}
    </div>
  );
}
