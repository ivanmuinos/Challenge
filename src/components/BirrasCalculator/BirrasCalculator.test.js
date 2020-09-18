import React from 'react'
import { render } from '@testing-library/react'
import BirrasCalculator from './BirrasCalculator'

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Lo mas importante para una meetup son las provisiones (BIRRAS). Por lo tanto este test es un MUST.

describe('Test cases of BirraCalculator ', () => {
  test('test BirraCalculator when temperature of the birra is < 20', () => {

      //Cuando la temperatura es < 20 se toma 0.75 birras por persona.
      //Cada cajon de birra contiene 6 birras
      // => 300 * 0.75 / 6 = 37.5 => redondeo para arriba (38)

      const wrapper = mount(<BirrasCalculator people={300} temperature={15}/>)
      expect(wrapper.find(".box__birras").text()).toContain("38")
  })
  test('test BirraCalculator when temperature of the birra between 20 and 24', () => {

    //Cuando la temperatura esta entre 20 y 24 se toma 1 birra por persona.
    //Cada cajon de birra contiene 6 birras
    // => 300 * 1 / 6 = 50

    const wrapper_case_1 = mount(<BirrasCalculator people={300} temperature={20}/>)
    expect(wrapper_case_1.find(".box__birras").text()).toContain("50")

    const wrapper_case_2 = mount(<BirrasCalculator people={300} temperature={24}/>)
    expect(wrapper_case_2.find(".box__birras").text()).toContain("50")
  })
  test('test BirraCalculator when temperature of the birra > 24', () => {

    //Cuando hace mucho calor (mas de 24 grados) se toman 2 birras por persona.
    //Cada cajon de birra contiene 6 birras
    // => 300 * 2 / 6 = 100

    const wrapper_case_1 = mount(<BirrasCalculator people={300} temperature={24.1}/>)
    expect(wrapper_case_1.find(".box__birras").text()).toContain("100")

    const wrapper_case_2 = mount(<BirrasCalculator people={300} temperature={28}/>)
    expect(wrapper_case_2.find(".box__birras").text()).toContain("100")
  })


})