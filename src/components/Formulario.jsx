import './Formulario.css'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const Formulario = () => {
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
        <section className='sign-in center'>
            {
                incorrectUser && <span className='incorrect-user'>Incorrect username or password.</span>
            }
            <h1 className='letter'>Bienvenido</h1>
            <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder='Usuario' className='input-form letter' 
                {
                    ...register('username', {
                        required: 'Debe ingresar un nombre de usuario valido.'
                    })
                }/>
                <p>{errors.username?.message}</p>
                <input type='password' placeholder='Contraseña' className='input-form letter'
                {
                    ...register('password', {
                        required: 'Debe ingresar su contraseña.'
                    })
                } />
                <p>{errors.password?.message}</p>
                <button className='btn-form'>Iniciar Sesion</button>
            </form>
        </section>
    )
}
