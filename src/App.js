import React, { useState } from "react";
import "./styles.css";
import Input from "./components/Input";
import Card from "./components/Card";

export default function App() {
  const [info, setInfo] = useState([]);

  function requestData(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=d26adb9d8cd5229d29846e5828e3b33c&units=metric"
    )
      .then((response) => response.json())

      .then((response) => {
        setInfo((info) => {
          return [...info, response];
        });
      });
  }

  function createCard(weatherData, index) {
    const icon = weatherData.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

    return (
      <Card
        key={index}
        name={weatherData.name}
        symbol={weatherData.sys.country}
        temp={weatherData.main.temp}
        icon={imageURL}
        description={weatherData.weather[0].description}
      />
    );
  }

  return (
    <div className="App">
      <h1 className="heading">Weather Web App</h1>
      <Input requestData={requestData} />
      {info.map(createCard)}
    </div>
  );
}
