import React from 'react'
import './MeetUpList.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUser} from '@fortawesome/free-solid-svg-icons'


function MeetUpList( props ) {
  const { meetups, admin } = props
  return (
    <div className="home__container">
      { admin.admin && <Link to="/add-meetup" className="link"><button className="button__meetup">Crear MeetUp</button></Link>}
      <h1>Próximos eventos</h1>
      <div className="meetup__container">
        { meetups.map( (item, i) => {
          return (
            <Link key={i} to={{ pathname:`/meetup/${item.id}`, state: item}}>
              <div key={i} className="container__card">
                <div className="card__header">
                  <span className="meetup__title">{item.description}</span>
                </div>
                <div className="card__body">
                  <span className="card__text__body"><FontAwesomeIcon size="2x" icon={faCalendarAlt} color="#afafaf"/> <Moment format={"D MMM YYYY"}>{item.date}</Moment></span>
                  <span className="card__text__body"><FontAwesomeIcon size="2x" icon={faCalendarAlt} color="#afafaf"/>{item.lugar}</span>
                  <span className="card__text__body"><FontAwesomeIcon size="2x" icon={faUser} color="#afafaf"/>{item.asistentes}</span>
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




