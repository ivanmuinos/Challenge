import React, {useState} from 'react'
import './CreateMeetUp.scss'
import { connect } from 'react-redux'
import moment from 'moment'
import BirrasCalculator from '../BirrasCalculator'
import Weather from '../Weather'
import Datepickers from '../UI/Datepickers'
import Timepickers from '../UI/Timepickers'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select';

function CreateMeetUp( props ) {

  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [place, setPlace] = useState()
  const [time, setTime] = useState()
  const [temperature, setTemperature] = useState()
  const [peopleQuantity, setPeopleQuantity] = useState()

  const handleDate = date => {
    setDate(moment(date).format('YYYY-MM-DD'))
  }
  
  const handleTime = time => {
    setTime(time)
  }

  const handlePlace = (event) => {
    const name = event.target.value;
    setPlace(name)
  };

  const handleTemperature = temp => {
    setTemperature(temp)
  }
  
  const handleClick = () => {
    alert("TO DO")
  }
 

  return (
    <div>
      <h2>¿Cuántos cajones de birra vamos a necesitar?</h2>
      <div className="container__createmeetup">
        <div className="weather__meetup">
            <Weather 
              api_key='1d5637f26b4944878df5bbe996f1efd7'
              country='AR'
              city='Buenos%20Aires,07'
              date={date}
              temperature={handleTemperature}
            />
            { 
              peopleQuantity !== undefined && 
              <BirrasCalculator 
              people={peopleQuantity}
              temperature={temperature}
              />   
            }
        </div>
        <div className="form__meetup">
          <div className="date__meetup">
            <span className="form__text">Fecha: </span>
            <Datepickers 
              onChange={handleDate}
            />
          </div>
          <div className="time__meetup">
            <span className="form__text">Horario: </span>
            <Timepickers 
              onChange={handleTime}
            />
          </div>
          <div className="people__meetup">
            <span className="form__text">Cantidad Invitados: </span>
            <Input
              id="people__input"
              onChange={(e) => setPeopleQuantity(e.target.value)}
            />
          </div>
          <div className="location__meetup">
            <span className="form__text">Lugar</span>
            <Select
              native
              value={place}
              onChange={handlePlace}
              className="place__meetup"
            >
              <option aria-label="None" value="" />
              <option value={"Parque Patricios"}>Parque Patricios</option>
              <option value={"San Telmo"}>San Telmo</option>
            </Select>
          </div>
          <div>
            <button 
                className="button__meetup"
                onClick={handleClick}>Crear MeetUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(CreateMeetUp);
