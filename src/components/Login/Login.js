import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Login.scss';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Input from '@material-ui/core/Input'

function Login( props ) {
  const { users, admin, logged } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  const handleLogin = () => {
    users.map((user, i) => {
      if(user.username === username && user.password === password){
        
        localStorage.setItem('user', JSON.stringify(user))
        props.parentCallBack({
          logged: true
        })
        if(user.role === 'admin'){
          admin(true)
        }else{
          admin(false)
        }
        logged(true)
      }else{
        setError(true)
      }
    })
  };

  return (
    <div>
      <button 
        className="login__button"
        onClick={handleOpen}>
        Iniciar Sesión
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="container__modal">
            <span className="title__login">Iniciar sesión</span>
            <div className="container__input__login">
              <Input
                className="input__login"
                placeholder="Nombre de usuario"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                className="input__login"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                className="button__login"
                onClick={handleLogin} 
              >
                logeate!
              </button>
              {error &&
              <div className="login__error">
                <span>Datos incorrectos!</span>
                <span>Intentá con: </span>
                <span>Usuario: Santander; Contraseña: admin</span>
                <span>Usuario: Ivan; Contraseña: user</span>
              </div>
              }

            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const mapStateToProps = state => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = dispatch => {
  return ({
    admin: value => dispatch({ type: 'ADMIN', payload: { admin: value }}),
    logged: value => dispatch({ type: 'LOGGED', payload: { logged: value }}),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)