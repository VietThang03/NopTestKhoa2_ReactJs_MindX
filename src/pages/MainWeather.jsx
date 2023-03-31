import React from "react";

export default function MainWeather({ data }) {
  return (
    <div className="container">
      <div className="top">
        <div className="location">{data.name}</div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp}°C</h1> : null}
        </div>
        <div className="desc">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
      {data.name !== undefined && (
        <div className="bottom">
          <div className="feels">
            {data.main ? <h2>{data.main.feels_like.toFixed()}°C</h2> : null}
            <p><i class="fa-solid fa-temperature-quarter"></i> Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <h2>{data.main.humidity}%</h2> : null}
            <p><i className="fa-solid fa-droplet" /> Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <h2>{data.wind.speed.toFixed()} MPH</h2> : null}
            <p><i className="fa-sharp fa-solid fa-wind" /> Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
}
