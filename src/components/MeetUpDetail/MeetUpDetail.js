import React from 'react'
import Weather from '../Weather'
import Moment from 'react-moment'
import Invite from '../InviteList'
import './MeetUpDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt, faClock, faUser} from '@fortawesome/free-solid-svg-icons'

export default function MeetUpDetail(props) {
  const { id, date, asistentes, description, lugar , time} = props.location.state
  
  const handleTemperature = temp => {

  }

  return (
    <div className="container_meetup">
      <span className="description__meetup">{description}</span>
      <div className="container__meetupdetail">
        <div className="detail__meetup">
          <span className="text__meetup"><FontAwesomeIcon icon={faCalendarAlt}/> <Moment format={"D MMM YYYY"}>{date}</Moment></span>
          <span className="text__meetup"><FontAwesomeIcon icon={faClock}/> {time}</span>
          <span className="text__meetup"><FontAwesomeIcon icon={faUser}/> {asistentes}</span>
          <span className="text__meetup"><FontAwesomeIcon icon={faMapMarkerAlt}/> {lugar}</span>
        </div>
        <div className="weather__meetup">
          <Weather 
            api_key='1d5637f26b4944878df5bbe996f1efd7'
            country='AR'
            city='Buenos%20Aires,07'
            date={date}
            temperature={handleTemperature}        
          />
        </div>
        <div className="people__meetup_detail">
          <Invite 
            idMeetup={id}
          />
        </div>
      </div>
    </div>
  )
}




