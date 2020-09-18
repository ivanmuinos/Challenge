import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather'
import moment from 'moment'

import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


const handleTemperature = temp => {
  console.log("test")
 }

describe('Test case of Weather', () => {
  test('test if render ok', () => {


    const wrapper = shallow(
      <Weather 
        api_key='1d5637f26b4944878df5bbe996f1efd7'
        country='AR'
        city='Buenos%20Aires,07'
        date={'2020-09-18'}
        temperature={handleTemperature}
      />
    )
  })

  
})