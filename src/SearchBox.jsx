import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({update}){
    let [city,setCity] = useState("");
    let [error,setError] =useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="042fbac666fdb3f4ff7d924ad30d883b";

    let getWeatherInfo=async(city)=>{
        try{
            let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
            let jsonResponse =await response.json();
            console.log(jsonResponse);
            let result={
             city:city,
             temp:jsonResponse.main.temp,
             tempMIN :jsonResponse.main.temp_min,
             tempMAX :jsonResponse.main.temp_max,
             humidity : jsonResponse.main.humidity,
             feelsLike :jsonResponse.main.feels_like,
             windSpeed :jsonResponse.wind.speed,
             weather:jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
     
        }catch(err){
            throw err;
        }
       
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (ev)=>{
        try{
            ev.preventDefault();
            console.log(city);
            setCity("");
            let weatherData =await getWeatherInfo(city);
            update(weatherData);
        }catch(err){
            setError(true);
        }
     
    }
    return(
        <div className="SearchBox">
        <h3>SearchBox</h3>
        <form>
        <TextField onChange={handleChange} value={city} id="city" label="City Name" variant="outlined" required/>
        <br/>
        <br/>
        <Button onClick={handleSubmit} type='submit' endIcon={<SendIcon/>}variant="contained">Search</Button>
        {(error) && <h1 style={{color:"red"}}>No such Place exists !</h1>}
        </form>
        </div>
    )
}
