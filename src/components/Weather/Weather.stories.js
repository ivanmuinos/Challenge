import React from 'react'
import Weather from './Weather'

export default {
  title: 'Weather',
  component: 'WeatherComponent'
}

export const WeatherExample_1 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={'2020-09-13'}
/>

export const WeatherExample_2 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={'2020-09-14'}
/>

export const WeatherExample_3 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={'2020-09-18'}
/>


export const WeatherExample_4 = () => 
<Weather 
  api_key='1d5637f26b4944878df5bbe996f1efd7'
  country='AR'
  city='Buenos%20Aires,07'
  date={'2020-09-25'}
/>