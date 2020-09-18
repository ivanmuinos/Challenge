import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import MeetUpDetail from '../MeetUpDetail'
import MeetUpList from '../MeetUpList'
import CreateMeetUp from '../CreateMeetup'
import Header from '../Header'

const initialValue = {     
  items: [],
  meetups: [
    {
      id: 1,
      date: '2020-09-25',
      time: '20:00',
      description: 'After work Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120',
      inviteList: [{name: 'Bill Gates'},{name: 'Alan Turing'},{name: 'Mark Zukerberg'},{name: 'Steve Jobs'}]
    },
    {
      id: 2,
      date: '2020-09-26',
      time: '19:00',
      description: 'After work Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120',
      inviteList: [{name: 'Bill Gates'},{name: 'Alan Turing'},{name: 'Mark Zukerberg'},{name: 'Steve Jobs'}]
    },
    {
      id: 3,
      date: '2020-09-27',
      time: '20:00',
      description: 'After work Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120',
      inviteList: [{name: 'Bill Gates'},{name: 'Alan Turing'},{name: 'Mark Zukerberg'},{name: 'Steve Jobs'}]
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120',
      inviteList: [{name: 'Bill Gates'},{name: 'Alan Turing'},{name: 'Mark Zukerberg'},{name: 'Steve Jobs'}]
    },
  ],
  users: [{
      username: 'Ivan',
      password: 'user',
      role: 'user'
    },
    {
      username: 'Santander',
      password: 'admin',
      role: 'admin'
    },
  ],
  admin: false,
  logged: false,
}

const reducer = (state = initialValue, action) => {

  switch (action.type) {
    case 'ADMIN':
      return {...state, admin: action.payload}
    case 'INVITE':   
      return {
        ...state,
          meetups: [
            ...state.meetups.slice(0, action.payload.id),
            action.payload.value,
            ...state.meetups.slice(action.payload.id +1)
          ] 
      }
    case 'LOGGED':
      return {...state, logged: action.payload}
    default:
      return state
  }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>
            <Route 
              exact path="/"
              component={MeetUpList}
            />
            <Route 
              path="/add-meetup"
              component={CreateMeetUp}
            />
            <Route 
              exact path="/meetup/:id" 
              component={MeetUpDetail} 
            />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Provider>
    </Router>
  );
}

export default App;
