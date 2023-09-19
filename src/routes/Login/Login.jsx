// import './Login.css'
// import { Formulario } from '../../components/Formulario'
// export const Login = () => {
//   return (
//     <section className='inicio-login' >
//       <Formulario />
//     </section>
//   )
// }

import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css';

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [incorrectUser, setIncorrectUser] = useState(false);
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const onSubmit = (data) => {
    const { username, password } = data
    fetch("http://localhost:3000/api/users/signin", {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => {
        if(response.status === 401){
            setIncorrectUser(true)
            return
        }
        return response.json()
    })
    .then((userData) => { 
        if(data){
            //console.log(userData.credentials)
            const user = {...userData.credentials, username: data.username}
            setUser(user)
            sessionStorage.setItem("user", JSON.stringify(user))
            navigate('/')
        }
    })
    .catch((err) => { console.log(err.message) })
}




  return (
    <div className={`container ${isSignUp ? 'right-panel-active' : ''} container-login`}>
      <div className="form-container sign-up-container">
        {
          incorrectUser && <span className='incorrect-user'>Incorrect username or password.</span>
        }
        <form className='form-login' action='#'>
          <h1 className='title-login'>Create Account</h1>
          <input className='input-login' type="text" placeholder="Name" />
          <input className='input-login' type="password" placeholder="Password" />
          <button className='button-login'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='title-login'>Sign in</h1>
          <span className='span-login'>or use your account</span>
          <input className='input-login' type='text' placeholder='Usuario' 
            {
            ...register('username', {
              required: 'Debe ingresar un nombre de usuario valido.'
            })
            } />
          <p>{errors.username?.message}</p>
          <input className='input-login' type='password' placeholder='Contraseña' 
            {
            ...register('password', {
              required: 'Debe ingresar su contraseña.'
            })
            } />
          <p >{errors.password?.message}</p>
          <a className="a-login" href="#">Forgot your password?</a>
          <button className='button-login'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className={`overlay ${isSignUp ? 'right-panel-active' : ''}`}>
          <div className="overlay-panel overlay-left">
            <h1 className='title-login-up'>Welcome Back!</h1>
            <p className='p-login'>To keep connected with us please login with your personal info</p>
            <button className={`ghost ${isSignUp ? 'right-panel-active' : ''} button-login`} onClick={toggleForm} id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className='title-login-up'>Hello, Friend!</h1>
            <p className='p-login'>Enter your personal details and start the journey with us</p>
            <button className={`ghost ${isSignUp ? 'right-panel-active' : ''} button-login`} onClick={toggleForm} id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

