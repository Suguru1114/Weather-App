import React from 'react'
import './Weather.css'
import search_icon from '..//assets/search.png'
import rain_icon from '..//assets/rain.png'
import clear_icon from '..//assets/clear.png'
import cloud_icon from '..//assets/cloud.png'
import dizzle_icon from '..//assets/dizzle.png'
import humid_icon from '..//assets/humid.png'
import snow_icon from '..//assets/snow.png'
import windy_icon from '..//assets/windy.png'

function Weather() {
  return (    
    <div className='weather'>
        <div className='search-bar'>
            <input type="text" placeholder='Search'></input>
            <img src={search_icon} alt="" />
        </div>
        <img src={clear_icon} alt="" className='weather-icon '/>
        <p>25°C</p>
        <p>Chatswood</p>
    </div> 
  )
}

export default Weather
