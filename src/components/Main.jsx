import { useState } from "react";
import "../styles/main.css"

export const Main = () => {

    const [city, setCity] = useState();

    function searchBtn (e) {
        e.preventDefault();

        setCity(e.target.value)
        console.log(city)
    }


  return (
    <div className='container'>
        <h3>Confira o clima de alguma cidade:</h3>
        <div className="input-container">
            <input type="text" placeholder='Digite o nome da cidade' id='city' />
            <button onClick={searchBtn} id="search" value={city}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className="weather-data">
            <h2><i className="fa-solid fa-location-dot"></i>
            <span id="city">São Paulo</span>
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
