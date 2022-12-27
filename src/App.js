import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=596039e2c61ba9dc2c0bdb9bb1974245`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
    axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
    }
  }

  return (
    <div className='mobile'>
    <div className="container-one">
      <div className="item-one">
        <p className='app_name'> the <br></br> daily <br></br>sunshine.</p>
      </div>

      <div className='item-two'>
        <p>enter your location.</p>
      {/* <div className='search'> */}
        <input
        value={location}
        onChange={event => setLocation(event.target.value)} 
        placeholder= 'queens, nyc'
        onKeyPress={searchLocation}
        type='text'>
        </input>
      {/* </div> */}
          {/* <div className='location'> */}
            <h3>{data.name}</h3> 
          {/* </div>
          <div className='description'> */}
            {data.weather ? <h5>{data.weather[0].main}</h5> : null}
          {/* </div>
          <div className='temperature'> */}
            {data.main ? <h5>temp: {data.main.temp}°F</h5> : null}
          {/* </div> */}
  
          {/* <div className='feels'> */}
            {data.main ? <h5>feels like: {data.main.feels_like.toFixed()}°F</h5> : null}
          {/* </div>
          <div className='humidity'>  */}
            {data.main ? <h5>humidity: {data.main.humidity}%</h5> : null}
          {/* </div>
          <div className='wind'> */}
            {data.wind ? <h5>wind: {data.wind.speed.toFixed()}mph</h5> : null}
          {/* </div> */}
      </div>
      </div>
  </div>

  );
}

export default App;


