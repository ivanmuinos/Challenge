import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import MeetUpDetail from '../MeetUpDetail'
import MeetUpList from '../MeetUpList'
import CreateMeetUp from '../Meetup'
import Header from '../Header'
import Footer from '../Footer'

const initialValue = {
  items: [],
  meetups: [
    {
      id: 1,
      date: '2020-09-25',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120',
      nombres_asistentes: [{
          name: 'pepito juarez'
        }
      ]
    },
    {
      id: 2,
      date: '2020-09-26',
      time: '19:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 3,
      date: '2020-09-27',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    },
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
    ,    {
      id: 4,
      date: '2020-09-28',
      time: '20:00',
      description: 'After work - Birra challenge',
      pronostico: 'Soleado',
      lugar: 'Parque patricios - Santander',
      asistentes: '120'
    }
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
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {...state, items: [...state.items, action.payload]}
    case 'REMOVE_ITEM':
      return {...state, items: state.items.filter(i => i.item !== action.payload)}
    case 'ADMIN':
      return {...state, admin: action.payload}
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
