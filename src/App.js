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
    }
  }

  return (
    <div className="container-one">
      <div classname='search'>
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
            <p>Zocca</p> 
          </div>
          <div className='temperature'>
            <p>65</p>
          </div>
          <div className='description'>
            <p>Rainy</p>
          </div>
          <div className='feels'>
            <p>60</p>
          </div>
          <div className='humidity'> 
            <p>25%</p>
          </div>
          <div className='wind'>
            <p>30mph</p>
          </div>
      </div>
  </div>

  );
}

export default App;


