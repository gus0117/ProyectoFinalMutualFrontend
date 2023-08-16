import './Formulario.css'
import { useState } from 'react'
export const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [contraseña, setContraseña] = useState('')
    return (
        <section className='sign-in center'>
            <h1 className='letter'>Bienvenido</h1>
            <form className='formulario'>
                <input type='text' placeholder='Usuario' className='input-form letter' />
                <input type='password' placeholder='Contraseña' className='input-form letter' />
                <button className='btn-form'>Iniciar Sesion</button>
            </form>
        </section>
    )
}
