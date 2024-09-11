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
          This project was coded by Phefumlela Madyo and is {""}
          <a href="https://github.com/PhefuM/my-app">
          open-sourced on GitHub
          </a>
          {""} and {""}
          <a href="https://sweet-cocada-e93e0e.netlify.app/">
          hosted on Netlify 
          </a>
      </div>
    </div>
    </div>
  );
}

export default App;