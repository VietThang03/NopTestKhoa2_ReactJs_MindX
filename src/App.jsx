import React, { useState } from 'react'
import axios from 'axios'
import MainWeather from './pages/MainWeather';
import { URL_API } from './utlis/url_api';

function App() {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('')

  const Search_Location = () => {
    axios.get(`${URL_API}?q=${location}&units=metric&appid=389802676fb5a763e894ab159eccc4ba`)
    .then((response) => {
      setData(response.data)
      // console.log(response.data)
    })
    setLocation('')
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          // onKeyPress={searchLocation}
          placeholder="Nhập Vị Trí..."
          type="text"
          
        />
        <button onClick={Search_Location}><i className='fa fa-search'></i></button>
      </div>
      <MainWeather data={data}/>
    </div>
  );
}

export default App;
