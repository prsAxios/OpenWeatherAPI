import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weather , setWeather] =useState({
        city:"Delhi",
        feelsLike : 24.84,
        temp : 25.05,
        tempMIN:25.05,
        tempMAX:25.25, 
        weather:"haze",
        windSpeed:2.06,
    })

    let updateWeather=(result)=>{
            setWeather(result);
    }
    return (
        <>
        <h1>Hows the weather?</h1>
        <SearchBox update={updateWeather}/>
        <InfoBox info={weather}/>
        </>
    )
}