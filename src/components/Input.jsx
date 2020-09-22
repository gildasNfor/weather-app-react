import React, { useState } from "react";
import "../styles.css";

function Input(props) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    const cityName = event.target.value;
    setCity(cityName);
    console.log(city);
  }

  function handleSubmit(event) {
    props.requestData(city);
    setCity("");
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Search for a city"
        value={city}
      />
      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </form>
  );
}

export default Input;
