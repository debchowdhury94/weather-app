import React from 'react'
import "./DisplayWeather.css"
import CelsiusCard from './CelsiusCard';
import FahrenheitCard from './FahrenheitCard';

export default function DisplayWeather(props) {
    const {data} = props;
    console.log(data);

    const icon_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ;

  return (
    <div className='displayweather'>
      <CelsiusCard data={data} icon_url={icon_url} />
      <FahrenheitCard  data={data} icon_url={icon_url} />
      
    </div>
  )
}
