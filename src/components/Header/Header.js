import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import Login from '../Login'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import './Header.scss'

function Header( props ) {

  const { admin, logged } = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [auth, setAuth] = useState()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogOut = () => {
    localStorage.clear()
    setAuth(false)
    admin(false)
    logged(false)
    handleClose()
  };

  const handleDataLogin = childData => {
    setAuth(childData.logged)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')

    if(user){
      setAuth(true)
      let parse_user = JSON.parse(user)
      if(parse_user.role === 'admin'){
        admin(true)
      }else{
        admin(false)
      }
    }
  }, [admin])
  
  return (
    <div className="header__container">
      <div className="header__left">
      <Link to="/" className="link">MeetUp Creator</Link>
      </div>
      <div className="header__center">
        <img src={require('../../images/santander.png')} alt="santander-meetup"/>
      </div>
      <div className="header__right">
      { auth ? 
        <div>
          <IconButton aria-label="show 17 new notifications">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
         </IconButton>
         <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
         >
           <AccountCircle />
         </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        </Menu>   
        </div>
        :
        <div>
          <Login 
            parentCallBack={handleDataLogin}
          />
        </div>
      }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    meetups: state.meetups
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    admin: value => dispatch({ type: 'ADMIN', payload: { admin: value }}),
    logged: value => dispatch({ type: 'LOGGED', payload: { logged: value }}),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)



