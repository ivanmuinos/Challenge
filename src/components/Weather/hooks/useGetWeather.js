import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetWeather = (props) => {
  const {api_key, country, city, date} = props
  const [weather, setWeather] = useState([])
  useEffect(() => {
    axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=${api_key}&lang=es`)
    .then(response => {
      setWeather(response.data.data)
    })
  }, [api_key, country, city, date])
  return [weather]
}

export default useGetWeather