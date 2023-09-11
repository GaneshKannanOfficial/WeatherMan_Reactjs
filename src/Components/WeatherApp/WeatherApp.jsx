import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon  from "../Assets/search.png"
import clear_icon  from "../Assets/clear.png"
import cloud_icon  from "../Assets/cloud.png"
import drizzel_icon  from "../Assets/drizzle.png"
import rain_icon  from "../Assets/rain.png"
import snow_icon  from "../Assets/snow.png"
import wind_icon  from "../Assets/wind.png"
import humididty_icon  from "../Assets/humidity.png"
const WeatherApp = () => {
  let api_key = "1d04ff219135970b127a0fc54855932e";

  const [wicon,setwicon] = useState(cloud_icon);
  const search = async () => {
      const element = document.getElementsByClassName("cityInput");
      if (element[0].value === ""){
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      let response = await fetch(url);
      let data = await response.json();
      const humidity = document.getElementsByClassName("humidity-per");
      const wind = document.getElementsByClassName("wind-rate");
      const temp = document.getElementsByClassName("weather-temp");
      const wloc = document.getElementsByClassName("weather-loc"); 

      humidity[0].innerHTML = data.main.humidity+" %";
      wind[0].innerHTML = data.wind.speed+" km/h";
      temp[0].innerHTML = Math.round(data.main.temp)+" ºC";
      wloc[0].innerHTML = data.name; 
      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
        setwicon(clear_icon);
      }
      else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
        setwicon(cloud_icon);
      }
      else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
        setwicon(drizzel_icon);
      }
      else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
        setwicon(drizzel_icon);
      }
      else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
        setwicon(rain_icon);
      }
      else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
        setwicon(snow_icon);
      }
      else{
        setwicon(clear_icon);
      }

    }
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='search'/>
        <div className="search-icon" onClick={()=>{search()}}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">
      34ºC
      </div>
      <div className="weather-loc">Chennai</div>
      <div className="datac">
      <div className="element">
        <img src={humididty_icon} alt="" className="icon" />
        <div className="data">
          <div className="humidity-per">50%</div>
          <div className="text">Humidity</div>     
        </div>   
      </div>
      <div className="element">
        <img src={wind_icon} alt="" className="icon" />
        <div className="data">
          <div className="wind-rate">18 km/hr</div>
          <div className="text">Wind Speed</div>     
        </div>   
      </div>
      </div> 
    </div>
  )
}

export default WeatherApp
