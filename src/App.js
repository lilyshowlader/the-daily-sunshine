import './App.css';
import axios from 'axios';
import { useState } from 'react';



function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=596039e2c61ba9dc2c0bdb9bb1974245`

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
    <div className="container-one">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)} 
        placeholder= 'enter location'
        onKeyPress={searchLocation}
        type='text'>
        </input>
      </div>

      <div className="item-one">
        <p> the <br></br> daily <br></br>sunshine.</p>
      </div>

      <div className='item-two'>

          <div className='location'>
            <p>{data.name}</p> 
          </div>
          <div className='temperature'>
            {data.main ? <p>{data.main.temp}</p> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div> 
          <div className='feels'>
            {data.main ? <p>{data.main.feels_like}</p> : null}
          </div>
          <div className='humidity'> 
            {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
          <div className='wind'>
            {data.wind ? <p>{data.wind.speed}mph</p> : null}
          </div>
      </div>
  </div>

  );
}

export default App;


