import React from 'react'
import Weather from './Weather'
import moment from 'moment'

export default {
  title: 'Weather',
  component: 'WeatherComponent'
}

const handleTemperature = temp => {
  console.log("Test")
}

export const WeatherExample_1 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={moment().format('YYYY-MM-DD')}
  temperature={handleTemperature}
/>

export const WeatherExample_2 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={moment().add(1,'DAYS').format('YYYY-MM-DD')}
  temperature={handleTemperature}
/>

export const WeatherExample_3 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={moment().add(2,'DAYS').format('YYYY-MM-DD')}
  temperature={handleTemperature}
/>

export const WeatherExample_4 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={moment().add(5,'DAYS').format('YYYY-MM-DD')}
  temperature={handleTemperature}
/>

export const WeatherExample_5 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={moment().add(10,'DAYS').format('YYYY-MM-DD')}
  temperature={handleTemperature}
/>
