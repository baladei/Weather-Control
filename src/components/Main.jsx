import React from 'react'

export const Main = () => {
  return (
    <div className='container'>
        <h3>Confira o clima de alguma cidade:</h3>
        <div className="input-container">
            <input type="text" placeholder='Digite o nome da cidade' id='city' />
            <button id="search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div className="weather-data">
            <h2><i className="fa-solid fa-location-dot"></i>
            <span id="city">São Paulo</span>
            <img src="" alt="Bandeira" id="country" />
            </h2>
            <p id="temperature"><span>38</span>&deg;C</p>
        </div>
        <div className="description-container">
            <p id="description">Nublado</p>
            <img src="" alt="Condições do tempo" id="weather-icon" />
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
  )
}
