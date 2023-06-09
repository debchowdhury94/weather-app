import React, { useState } from 'react'
import "./Weather.css"
import DisplayWeather from './DisplayWeather';

export default function Weather() {

    const APIKEY = "99a313b400512fe3fadebf03d1d23086";

    const [form, setForm] = useState({
        city: "",
        country: "",
    })
    const [weather, setWeather] = useState([]);

    async function weatherData(e) {
        e.preventDefault();
        if(form.city === ""){
            alert("Add city name");
        }else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(data => data);

            setWeather({data:data});
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "city") {
            setForm({...form, city: value});
        }
        if(name === "country") {
            setForm({...form, country: value});
        }
    }

  return (
    <div className='weather'>
      <span className="title">Weather App</span>
      <br/>
      <form>
        <input type='text' name='city' placeholder='city' onChange={e => handleChange(e)}  /> 
        &nbsp; &nbsp; &nbsp;
        <input type='text' name='country' placeholder='country' onChange={e => handleChange(e)} />
        <button className="getweather" onClick={(e) => weatherData(e)} >Submit</button>
      </form>
      {
        weather.data !== undefined ? (
        <div>
            <DisplayWeather data={weather.data} />
        </div>  
        ):null    
      }
      
    </div>
  )
}
