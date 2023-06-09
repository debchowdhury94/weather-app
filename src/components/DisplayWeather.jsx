import React from 'react'
import "./DisplayWeather.css"

export default function DisplayWeather(props) {
    const {data} = props;
    console.log(data);
  return (
    <div className='displayweather'>
        <div className="maincard">
            <span className="cardtitle">
                {data.name}, {data.sys.country}
            </span>
        </div>
      
    </div>
  )
}
