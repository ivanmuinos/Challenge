import React from 'react'
import CreateMeetUp from './CreateMeetUp'
import { Provider } from 'react-redux'
import { store } from '../App/App'

import { render } from '@testing-library/react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ExpansionPanelActions } from '@material-ui/core'

configure({ adapter: new Adapter() });

describe('test case of CreateMeetUp Component', () => {
  test('test if when i put a number in people input, the BirraCalculator rendered ok', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <CreateMeetUp/>
      </Provider>
    )
    const input = wrapper.find("input").at(2).simulate('change',{target: { value: 300}})
    expect(wrapper.find(".box__birras").text()).not.toHaveLength(0)
  })
})



