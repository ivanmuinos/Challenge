import React, { useEffect } from 'react'
import './Weather.scss'
import Moment from 'react-moment'
import useGetWeather from './hooks/useGetWeather'
import PropTypes from 'prop-types'

//Componente que consulta a la API weatherbit
//Devuelve el pronostico del tiempo hasta 16 dias segun Pais, Ciudad y fecha específica.

export default function Weather( props ) {
  const { date } = props
  const [ weather ] = useGetWeather(props)

  const handleTemperature = (weather, date) => {
    let result = weather.filter(item => item.valid_date === date).map(item => item.max_temp)
    props.temperature(result[0])
   }

  useEffect(() => {
    handleTemperature(weather, date)
  }, [weather, handleTemperature, date])

  return (
    <div>
      {
        weather.filter(item => item.valid_date === date).map((item, i) => {
          return (
            <div className="weather__container" key={i}>
              <span className="title__weather">Pronóstico para el día: </span>
              <span className="date__weather"><Moment format={"D MMM YYYY"}>{item.valid_date}</Moment></span>
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

Weather.propTypes = {
  api_key: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,

}








