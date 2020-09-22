import React from "react";
import "../styles.css";

function Card(props) {
  return (
    <div className="note">
      <p>
        {props.name}
        <sup className="symbol">{props.symbol}</sup>
      </p>
      <p className="temp">
        {props.temp}
        <sup className="celsuis">&#8451;</sup>
      </p>
      <p>
        <img src={props.icon} alt="Weather Image" />
      </p>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
