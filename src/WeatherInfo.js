import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="header">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize"> {props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            {" "}
            <img
              src={props.data.icon}
              alt="broken clouds"
              className="float-left"
            />{" "}
            <span className="temperature">{props.data.temperature}</span>{" "}
            <span className="unit">℃</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{Math.round(props.data.wind)} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
