import React from "react";
import Weather from "./Weather";
import HeaderFile from "./HeaderFile";
import "./App.css";

function App() {
  return (
    <div className="App">
        <div className="Weather-app">
        <HeaderFile />
        <header>
          <h1>Weather today</h1>
        </header>
        <Weather />
        <div className="Footer">
          This project was coded by
          <a href="https://github.com/PhefuM/my-app"> Phefumlela Madyo

          </a>
      </div>
    </div>
    </div>
  );
}

export default App;