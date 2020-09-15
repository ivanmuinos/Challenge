import React from 'react'
import './MeetUpList.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function MeetUpList( props ) {
  const { meetups, admin } = props
  return (
    <div>
      { admin.admin && <Link to="/add-meetup" className="link"><button className="button__meetup">Crear MeetUp</button></Link>}
      <h1>Próximos eventos</h1>
      <div className="meetup__container">
        { meetups.map( (item, i) => {
          return (
            <Link key={i} to={{ pathname:`/meetup/${item.id}`, state: item}}>
              <div key={i} className="container__card">
                <div className="card__header">
                  <span>{item.date}</span>
                  <span>{item.pronostico}</span>
                </div>
                <div className="card__body">
                  <span>{item.description}</span>
                  <span>Lugar: {item.lugar}</span>
                  <span>{item.asistentes} asistentes</span>
                  <button>Asistir</button>
                </div>
              </div>
            </Link>
          )  
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    meetups: state.meetups,
    admin: state.admin
  }
}

export default connect(mapStateToProps)(MeetUpList)




