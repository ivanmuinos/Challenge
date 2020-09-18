import React, {useState, useEffect} from 'react'
import './InviteList.scss'
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input'
import { connect } from 'react-redux';

function InviteList(props) {
  const {idMeetup, meetups, invite, admin, logged } = props;
  const [userName, setuserName] = useState()

  const handleAddInvite = () => {
    if(logged.logged){
      meetups.map(((item, i) => {
        if(item.id === idMeetup){  
           if(admin.admin){
            item.inviteList.push({name: userName})
           }else{
            item.inviteList.push({name: "Ivan"})
           }
           invite(i, item)
        }
      }))
    }else{
      alert("Para inscribirte tenes que estar logeado")
    }
  }
  
  useEffect(() => {}, [admin, logged])

  return (
    <div className="container__invite">
      <div className="add__container">
        {admin.admin &&  
        <Input
          placeholder="Invitar a ..."
          onChange={(e) => setuserName(e.target.value)}
        />
        }
        <button 
          onClick={handleAddInvite}
          className="add__button"
        >
          {
            admin.admin ? "Agregar" : "Inscribirse"
          }
        </button> 
      </div>
      <div>
      {meetups.filter(item => item.id === idMeetup).map((item, i) => {
          return (
            <div key={i}>
              {item.inviteList.map((item, i) => {
                return (
                  <Chip
                  key={i}
                  size="medium"
                  avatar={<Avatar alt={item.name} />}
                  label={item.name}
                 />
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    meetups: state.meetups,
    admin: state.admin,
    logged: state.logged
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    invite: (id, value) => dispatch({ type: 'INVITE', payload: {id: id, value: value}}),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(InviteList)



