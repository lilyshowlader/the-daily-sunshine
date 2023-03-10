import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {
  const [data, setData] = useState({})
  // set to empty object because the data we are receiving will come in an object. 
  const [location, setLocation] = useState('')
  // this was set to a empty string because the user will update the string

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=596039e2c61ba9dc2c0bdb9bb1974245`
  // this is the url for the API call. the location was replaced with a template literal of location because that is what will change dynamically based on user input 

  // function to search entered location. 
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      // look into event.key
    axios.get(url).then((response) =>{
      // go to the given url and when that is completed, take the response and set the data using setData to the response
      setData(response.data)
      console.log(response.data)
      console.log(event)
    })
    setLocation('')
    // console.log(setLocation)
    // the above line of code resets the input back to an empty string after a search is initiated
    }
  }

  let dateWithoutSecond = new Date();


  return (
    <div className='mobile'>
    <div className="container-one">

      <div className="item-one">
        <p className='time_and_date'>{dateWithoutSecond.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})} </p>
        <p className='app_name'> the <br></br> daily <br></br>sunshine.</p>
      </div>

      <div className='item-two'>
        <p className='location_enter'>enter your location.</p> 
        <input
        value={location}
        onChange={event => setLocation(event.target.value)} 
        placeholder= 'queens, nyc'
        onKeyPress={searchLocation}
        type='text'>
        </input>
          <h3>{data.name}</h3>
          {data.weather ? <h5>{data.weather[0].description}</h5> : null}
          {data.main ? <h5>temp: {data.main.temp.toFixed()}°F</h5> : null}
          {data.main ? <h5>high: {data.main.temp_max.toFixed()}°F</h5> : null}{data.main ? <h5>low: {data.main.temp_min.toFixed()}°F</h5> : null}
          {data.main ? <h5>feels like: {data.main.feels_like.toFixed()}°F</h5> : null}
          {data.main ? <h5>humidity: {data.main.humidity}%</h5> : null}
          {data.wind ? <h5>wind: {data.wind.speed.toFixed()}mph</h5> : null}
      </div>
      </div>
  </div>

  );
}

export default App;


