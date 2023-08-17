import './Formulario.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const Formulario = () => {
    const [incorrectUser, setIncorrectUser] = useState(true);
    //const { setUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.log(data);
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
        .then((response) => response.json())
        .then((data) => { console.log(data.credentials) })
        .catch((err) => { console.log(err.message) })
        /* setUser(data);
        localStorage.setItem('currentUser', JSON.stringify(data));
        navigate('/'); */
    
        //TODO validar usuario con mockapi
        /* if(validateUser(data.username, data.password)){
          setUser(data);
          localStorage.setItem('currentUser', JSON.stringify(data));
          navigate('/');
          setIncorrectUser(false);
        }
        else {
          setIncorrectUser(true);
        } */
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
