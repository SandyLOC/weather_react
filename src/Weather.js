import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    const [temperature, setTemperature] = useState("null");
    const [description, setDescription] = useState("null");
    const [wind, setWind] = useState("null");
    const [humidity, setHumidity] = useState("null");
    const [icon, setIcon] = useState("null");

    function showTemperature(response) {
        setTemperature(response.data.main.temp);
        setDescription(response.data.weather[0].description);
        setWind(response.data.wind.speed);
        setHumidity(response.data.main.humidity);
        setIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    }
    let apiKey = "73b2674189dd157fb1ec3b25880baefd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
    
    if(temperature){
        return(
        <div className="Weather">
            <h2>The weather in {props.city} is</h2>
            <ul>
                <li>Temperature: {temperature}°C</li>
                <li>Description: {description}</li>
                <li>Wind: {wind} Km/h</li>
                <li>Humidity: {humidity}%</li>
                <li><img src={icon} /></li>
            </ul>
        </div>
        );
    } else {
        return(
            <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={1000} //1 secs
          />
        );
    }
}