import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import './NuevoComercio.css';
import { addComercio } from '../../services/ComercioService';

const NuevoComercio = () => {
    //const [incorrectForm, setIncorrectForm] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { name, cuit, barrio, calle, numero, phone, localidad } = data
        addComercio(name, cuit, barrio, calle, numero, phone, localidad).then(
            navigate('/comercios')
        );
    }
  return (

    <>
        <div className="section-title">
            <h4 className="text-center">Registrar nuevo comercio</h4>
        </div>

        <section className='container-nuevo-comercio'>
            <form onSubmit={handleSubmit(onSubmit)} className='form-nuevo-comercio searcher-body mt-20'>
                <input type='text' className='input-comercio' placeholder='Nombre del comercio' 
                {
                    ...register('name', {
                        required: 'Debe ingresar un nombre de comercio válido.'
                    })
                }/>
                <p>{errors.name?.message}</p>
                <input type='number' placeholder='N° de CUIT' className='input-comercio'
                {
                    ...register('cuit', {
                        required: 'Debe ingresar el N° de CUIT del comercio'
                    })
                } />
                <p>{errors.cuit?.message}</p>
                <input type='number' placeholder='Número de teléfono' className='input-comercio'
                {
                    ...register('phone', {
                        required: 'Debe ingresar el N° de CUIT del comercio'
                    })
                } />
                <p>{errors.phone?.message}</p>
                <input type='text' placeholder='Barrio' className='input-comercio'
                {
                    ...register('barrio', {
                        required: 'Debe ingresar el nombre del barrio.'
                    })
                } />
                <p>{errors.cuit?.message}</p>
                <input type='text' placeholder='Calle' className='input-comercio'
                {
                    ...register('calle', {
                        required: 'Debe ingresar un nombre de la calle.'
                    })
                }/>
                <p>{errors.name?.message}</p>
                <input type='number' placeholder='Número' className='input-comercio'
                {
                    ...register('numero', {
                        required: 'Debe ingresar el número del domicilio.'
                    })
                }/>
                <p>{errors.name?.message}</p>
                <input type='text' placeholder='Localidad' className='input-comercio'
                {
                    ...register('localidad', {
                        required: 'Debe ingresar el nombre de la localidad.'
                    })
                }/>
                <p>{errors.name?.message}</p>
                <div className="btn-comercio-container">
                    <button className='btn-nuevo-comercio btn-guardar-comercio' type='submit'>Guardar</button>
                    <button className='btn-nuevo-comercio btn-reset-comercio' type='reset'>Borrar</button>
                </div>
            </form>
        </section>
    </>
    
  )
}

export default NuevoComercio