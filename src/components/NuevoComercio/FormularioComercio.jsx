import React from 'react'
import './FormularioComercio.css'
import { useForm } from 'react-hook-form'

const FormularioComercio = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

    }

  return (
    <section className='container'>
        <h1 className='letter'>Registrar nuevo comercio</h1>
        <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='nombre' className='input-form letter' 
            {
                ...register('nombre', {
                    required: 'Debe ingresar el nombre del comercio.'
                })
            }/>
            <p>{errors.nombre?.message}</p>
            <input type='number' placeholder='CUIT' className='input-form letter'
            {
                ...register('cuit', {
                    required: 'Debe ingresar el CUIT.'
                })
            } />
            <p>{errors.cuit?.message}</p>
            <input type='number' placeholder='Teléfono' className='input-form letter'
            {
                ...register('telefono', {
                    required: 'Debe ingresar el número de teléfono.'
                })
            } />
            <p>{errors.telefono?.message}</p>
            <input type='text' placeholder='Barrio' className='input-form letter'
            {
                ...register('barrio', {
                    required: 'Debe ingresar el Barrio.'
                })
            } />
            <p>{errors.barrio?.message}</p>
            <input type='text' placeholder='Calle' className='input-form letter'
            {
                ...register('calle', {
                    required: 'Debe ingresar el nombre de la calle.'
                })
            } />
            <p>{errors.calle?.message}</p>
            <input type='number' placeholder='Número' className='input-form letter'
            {
                ...register('numero', {
                    required: 'Debe ingresar el número.'
                })
            } />
            <p>{errors.numero?.message}</p>
            <input type='text' placeholder='Localidad' className='input-form letter'
            {
                ...register('localidad', {
                    required: 'Debe ingresar la localidad.'
                })
            } />
            <p>{errors.localidad?.message}</p>
            <button className='btn-form' type='submit'>Registrar</button>
            <button className='btn-form' type='reset'>Cancelar</button>
        </form>
    </section>
  )
}

export default FormularioComercio