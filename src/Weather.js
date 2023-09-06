import React from "react";

export default function Weather() {
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
          <div className="col-3">
            <input type="Submit" value=" Seach" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-6">
          <h1>Nairobi</h1>
          <ul>
            <li>Wed 10 am </li>
            <li> Broken clouds</li>
          </ul>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="broken clouds"
          />{" "}
          25 ℃
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:44%</li>
            <li>Wind :16 Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
