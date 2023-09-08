import React from "react";
import FormatDate from "./FormatDate";
import Units from "./Units";

export default function Climate(props) {
  return (
    <div className="climate">
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
          <div>
            {" "}
            <img src={props.data.icon} alt="broken clouds" />{" "}
            <Units celsius={props.data.temperature} />
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
