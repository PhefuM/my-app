import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function HeaderFile(){
    return(
    <ReactAnimatedWeather
    icon= "CLEAR_DAY"
    color= "goldenrod"
    size={80}
    animate={true}
  />
    ); 
}