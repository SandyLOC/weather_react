import React, {useState} from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import Weather from "./Weather.js";

function App() {
  let [city, setCity] = useState("");
  let [place, setPlace] = useState(false);

  function handleSubmit(event){
    event.preventDefault();
    setCity(place);
  }
  let form = <div className="App">
  <h1>Weather App</h1>
  <form onSubmit={handleSubmit}>
    <input type="search" className="search" placeholder="Enter a city..." onChange={(event) => setPlace(event.target.value)}/>
    <input type="submit"  className="button" value="Search"/>
  </form>
  </div>;

if(city) {
    return(
      <div>
      {form}
      <Weather city={city}/>
      </div>
    );
} else{
  return(
    <div>
    {form}
    <Loader 
    className="Loader"
    type="ThreeDots"
    color="#00BFFF"
    secondaryColor="grey"
    height={100}
    width={200}
    timeout={2000} //5 secs
  />
  </div>
);
}
}

export default App;
