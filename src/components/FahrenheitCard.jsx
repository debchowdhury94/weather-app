import React from "react";

export default function FahrenheitCard(props) {
  const { data, icon_url } = props;

  return (
    <div className="fahrenheit-card" id="in-fahrenheit">
      <div className="maincard">
        <span className="cardtitle">
          {data.name}, {data.sys.country}
        </span>
        <span className="cardsubtitle">
          as of{" "}
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <div className="center-temp">
          <h1>
            {Math.round((data.main.temp - 273.15) * 1.8 + 32)}
            <sup>o</sup>F
          </h1>
          <div className="icon-wrapper">
            <img className="weather-icon" alt="" src={icon_url} />
            <span className="weather-main">{data.weather[0].main}</span>
          </div>
        </div>

        <span className="weather-description">
          {data.weather[0].description}
        </span>
      </div>

      <div className="weatherdetails">
        <div className="section1">
          <table className="table1">
            <tr>
              <td>
                <h4>High/Low</h4>
              </td>
              <td>
                <span>
                  {(Math.floor(data.main.temp_max - 273.15) * 1.8 + 32).toFixed(
                    1
                  )}
                  /{" "}
                  {(Math.floor(data.main.temp_min - 273.15) * 1.8 + 32).toFixed(
                    1
                  )}{" "}
                  <sup>o</sup>F
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Humidity</h4>
              </td>
              <td>
                <span>{data.main.humidity} %</span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Pressure</h4>
              </td>
              <td>
                <span>{data.main.pressure} hPa</span>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Visibility</h4>
              </td>
              <td>
                <span>{(data.visibility / 1600).toFixed(1)} mi</span>
              </td>
            </tr>
          </table>
        </div>

        <div className="section2">
          <table className="table2">
            <tbody>
              <tr>
                <td>
                  <h4>Wind</h4>
                </td>
                <td>
                  <span>
                    {(Math.floor((data.wind.speed * 18) / 5) / 1.6).toFixed(1)}{" "}
                    mi/hr
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Wind Direction</h4>
                </td>
                <td>
                  <span>
                    {data.wind.deg}
                    <sup>o</sup> deg
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Sunrise</h4>
                </td>
                <td>
                  <span>
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Sunset</h4>
                </td>
                <td>
                  <span>
                    {new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
