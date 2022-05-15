import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const table = ['London', 'Berlin', 'Madrid', 'Warsaw', 'Odessa'];
  const tab = table[Math.floor(Math.random()* table.length)];
  const time = new Date().toLocaleString()

  const [place, setPlace] = useState(`${tab}`);
  const [placeInfo, setPlaceInfo] = useState({});

  const API = `09f6b172443163c7350e6dd50325d27b`;
  useEffect(() => {
    const interval = setInterval(()=> setPlace(table[Math.floor(Math.random()* table.length)]), 30000)
    return () => {
      clearInterval(interval);
    };
  }, []);

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API}&units=metric`)
  .then(response => response.json())
  .then(data => 
    setPlaceInfo({
    temp: data.main.temp,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    date: time,
  }))
  .catch(err => console.log(err));

  

  return (
    <div className="main">
      <div className="firstCity">
      <h1>{place}</h1>
      <h2>{placeInfo.temp} &#176;C</h2>
      <h2>{placeInfo.pressure} hPa</h2>
      <h2>{placeInfo.winds} m/s</h2>
      <h2>{placeInfo.time}</h2>
      </div>
      <div className="secondCity">
      <h1>{place}</h1>
      <h2>{placeInfo.temp} &#176;C</h2>
      <h2>{placeInfo.pressure} hPa</h2>
      <h2>{placeInfo.winds} m/s</h2>
      <h2>{placeInfo.time}</h2>
      </div>
      <div className="thirdCity">
      <h1>{place}</h1>
      <h2>{placeInfo.temp} &#176;C</h2>
      <h2>{placeInfo.pressure} hPa</h2>
      <h2>{placeInfo.winds} m/s</h2>
      <h2>{placeInfo.time}</h2>
      </div>
    </div>
  );
};


export default App;
