import { useState } from "react";
import "../styles/main.css"

export const Main = () => {
    const [city, setCity] = useState();
    const [testeCity, setTesteCity] = useState();

    const API_KEY = "6b0d0377b789916d028701b16528b38b"

    const cityElement = document.querySelector("#city");
    const tempElement = document.querySelector("#temperature span");
    const descripElement = document.querySelector("#description");
    const weatherIconElement = document.querySelector("#weather-icon");
    const countryElement = document.querySelector("#country");
    const umidityElement = document.querySelector("#umidity span");
    const windElement = document.querySelector("#wind span");

    async function getWeatherData () {
        const apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`

        const res = await fetch(apiWeather);
        const data = await res.json();

        console.log(data)
        console.log(data.name)
        console.log(data.wind.deg)

        return data;

    }

    function searchBtn (e) {
        e.preventDefault();

        getWeatherData()
        setTesteCity(city)
    }


  return (
    <div className='container'>
        <h3>Confira o clima de alguma cidade:</h3>
        <div className="input-container">
            <input type="text" placeholder='Digite o nome da cidade' id='city' onChange={(e) => setCity(e.target.value)} />
            <button onClick={searchBtn} id="search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className="weather-data">
            <h2><i className="fa-solid fa-location-dot"></i>
            <span id="city">{testeCity}</span>
            <img src="https://www.countryflagicons.com/SHINY/64/BR.png" alt="Bandeira" id="country" />
            </h2>
            <p id="temperature"><span>38</span>&deg;C</p>
        
        <div className="description-container">
            <p id="description">Nublado</p>
            <img src="http://openweathermap.org/img/wn/01d.png" alt="Condições do tempo" id="weather-icon" />
        </div>
        <div className="details-container">
            <p id="umidity">
                <i className="fa-solid fa-droplet"></i>
                <span>48%</span>
            </p>
            <p id="wind">
                <i className="fa-solid fa-wind"></i>
                <span>3km/h</span>                
            </p>
        </div>
        </div>
    </div>
  )
}
