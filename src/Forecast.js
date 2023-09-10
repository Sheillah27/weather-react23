import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setloaded] = useState(false);
  function displayResponse(response) {
    console.log(response.data);
    setloaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-Day">Thu</div>
            <div>{props.forecasteicon.icon}</div>
            <div>
              {" "}
              <span className="forecast-temp-max">19°</span>
              <span className="forecast-temp-min text-muted">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5a3a229d5b0ff9b918233984e0904dfb";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayResponse);
  }
}
