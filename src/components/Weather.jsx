import React, { useEffect } from 'react'
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

    const search = async()=>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
        
            const response = await fetch(url);
            const data = await response.json();
            console .log(data);

        } catch (error) {   
            console.error("Error fetching weather data:", error);

        }
    }
        useEffect(()=>{
            search("Sydney");

        },[])

  return (    
    <div className='weather'>
        <div className='search-bar'>
            <input type="text" placeholder='Search'></input>
            <img src={search_icon} alt="" />
        </div>
        <img src={clear_icon} alt="" className='weather-icon'/>
        <p className='temperature'>25°C</p>
        <p className='location'>Sydney</p>
        <div className='weather-data'>
            <div className='col'>
                <img src={humid_icon} alt=''/>
                <div>
                    <p>91%</p>
                    <span>Humidity</span>
                </div>
         </div>

         <div className='col'>
                <img src={windy_icon} alt=''/>
                <div>
                    <p>3.6km/h</p>
                    <span>Wind Speed</span>
                </div>
         </div>
        </div>
    </div> 
  )
}

export default Weather
