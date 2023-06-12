import React, { useState } from "react";
import "./Weather.css";
import DisplayWeather from "./DisplayWeather";

export default function Weather() {
  const APIKEY = "99a313b400512fe3fadebf03d1d23086";

  const [form, setForm] = useState({
    city: "",
    country: "",
  });
  const [weather, setWeather] = useState([]);
  const [unit, setUnit] = useState("metric");

  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add city name");
    } else {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
        )
          .then((res) => res.json())
          .then((data) => data);

        if (data.cod && data.cod !== 200) {
          throw new Error("City Not Found");
        }

        setWeather({ data: data });
      } catch (error) {
        alert("City not found! Please check the spelling.");
      }
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div className="weather">
      <h5 className="title">The Weather App</h5>
      <br />
      <div className="search-bar">
        <form>
          <input
            id="city-autocomplete"
            type="text"
            name="city"
            placeholder="city"
            onChange={(e) => handleChange(e)}
          />
          &nbsp; &nbsp; &nbsp;
          <button className="getweather" onClick={(e) => weatherData(e)}>
            Search
          </button>
        </form>
        {unit === "metric" ? (
            <button className="switch-unit" onClick={() => setUnit("imperial")}>
              <sup>o</sup>F
            </button>
          ) : (
            <button className="switch-unit" onClick={() => setUnit("metric")}>
              <sup>o</sup>C
            </button>
          )}
      </div>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} unit={unit} />
        </div>
      ) : null}
    </div>
  );
}
