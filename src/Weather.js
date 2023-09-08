import React, { useState } from "react";
import axios from "axios";
import Climate from "./Climate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function search() {
    let apiKey = "5a3a229d5b0ff9b918233984e0904dfb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleUpdate(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder=" Enter city"
                className="form-control"
                onChange={handleUpdate}
              />
            </div>
            <div className="col-3 ">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Climate data={weatherData} />
      </div>
    );
  } else {
    search();
    return "loading..";
  }
}
