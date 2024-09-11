import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="Search">
      <input
        type="search"
        placeholder="Enter a city.."
        className="form-control search-input"
        onChange={handleCityChange}
        value={city}
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div>
          <div>
          Temperature
          <br />
          <div class="weather-app-temperature">
            {Math.round(weather.temperature)}°C
            </div>
          <div className="units">
          <p>Description: {weather.description}</p>
          <p>Humidity: {weather.humidity} %</p>
          <p>Wind: {weather.wind} km/h</p>
          <p>
            <img src={weather.icon} alt={weather.description} />
          </p>
          </div>

        </div>
      </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
