import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css';

export const Login = () => {
  const [incorrectUser, setIncorrectUser] = useState(false);
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

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
    <div className='container container-login'>
      <div className="form-container sign-in-container">
      {
          incorrectUser && <span className='incorrect-user'>Usuario o contraseña incorrecta.</span>
        }
        <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='title-login'>Iniciar Sesión</h1>
          <span className='span-login'>usa tu cuenta</span>
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
          <button className='button-login'>Iniciar Sesión</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className='overlay '>
          <div className="overlay-panel overlay-right">
            <h1 className='title-login-up'>Hola, Bienvenido!</h1>
            <p className='p-login'>Registrate ;)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

