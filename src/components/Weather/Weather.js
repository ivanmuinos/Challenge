import React, { useEffect } from 'react'
import './Weather.scss'
import useGetWeather from './hooks/useGetWeather'

//Componente que consulta a la API weatherbit
//Devuelve el pronostico del tiempo segun Pais, Ciudad y fecha específica.

export default function Weather( props ) {
  const { date } = props
  const [ weather ] = useGetWeather(props)

  const handleTemperature = (weather, date) => {
    let result = weather.filter(item => item.valid_date === date).map(item => item.max_temp)
    props.temperature(result[0])
   }

  useEffect(() => {
    handleTemperature(weather, date)
  }, [weather])
  return (
    <div>
      {
        weather.filter(item => item.valid_date === date).map((item, i) => {
          return (
            <div className="weather__container" key={i}>
              <span className="title__weather">Pronóstico para el día: </span>
              <span className="date__weather">{item.valid_date}</span>
              <div className="body__weather">
                <div>
                  <img src={require(`../../images/weather-icons/${item.weather.icon}.png`)} alt={item.weather.description}/>
                </div>
                <div className="temp__weather">
                  <span className="max__temp">{Math.ceil(item.max_temp)}°C</span>
                  <span className="min__temp">{Math.ceil(item.min_temp)}°C</span>
                </div>
              </div>
              <span>{item.weather.description}</span>
            </div>
          )
        })     
      }
    </div>
  )
}








