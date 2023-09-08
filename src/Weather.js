import React, { useState } from "react";
import axios from "axios";
import Climate from "./Climate";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});
  function showTemperature(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
      city: response.data.name,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder=" Enter city"
                className="form-control"
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
    let city = "Nairobi";
    let apiKey = "5a3a229d5b0ff9b918233984e0904dfb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
}
