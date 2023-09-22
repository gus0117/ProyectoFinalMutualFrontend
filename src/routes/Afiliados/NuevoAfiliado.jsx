import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postAfiliado, getAfiliados } from '../../services/AfiliadoService';
import { AffiliatesContext } from '../../context/AffiliatesContext'
import './NuevoAfiliado.css'

export const NuevoAfiliado = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { affiliates, setAffiliates } = useContext(AffiliatesContext)
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    //  postAfiliado(data)
    //  setAffiliates([...affiliates,data])
    //  reset();
    //  navigate('/afiliados')  
    try {
      setAffiliates([...affiliates,data])
      postAfiliado(data)
      const updatedAffiliates = await getAfiliados()
      reset()
      navigate('/afiliados')
    } catch (error) {
      console.log('Error al agregar afiliado:', error);
    }

  }

  return (
    <>
      <div className="section-title">
        <h4 className="text-center">Registrar nuevo afiliado</h4>
      </div>

      <section className="container-nuevo-comercio px-20">
        <form className='form-order-afiliado searcher-body mt-20' onSubmit={handleSubmit(onSubmit)}>
          <div className='form-content'>
            {/* Datos personales */}
            <fieldset>
              <legend>Datos personales</legend>
              <div className='form-input-afiliado'>

                <label className='order-label-afiliado'>Nombre</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Nombre Afiliado'
                  className='input-order'
                  {...register('name', {
                    required: 'Debe ingresar un Nombre'
                  })}
                />
                <p className='input-error'>{errors.name?.message}</p>
              </div>
              <div className="form-input-afiliado">
                <label className='order-label-afiliado'>Apellido</label>
                <input
                  type='text'
                  id='lastname'
                  placeholder='Apellido'
                  className='input-order'
                  {...register('lastname', {
                    required: 'Debe ingresar Apellido.'
                  })}
                />
                <p className='input-error'>{errors.lastname?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Fecha de Nacimiento</label>
                <input
                  type='date'
                  id='birthdate'
                  placeholder='Fecha de Nacimiento'
                  className='input-order'
                  {...register('birthdate', {
                    required: '⚠ Debe ingresar una fecha valida'
                  })}
                />
                <p className='input-error'>{errors.birthdate?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>DNI</label>
                <input
                  type='number'
                  id='dni'
                  placeholder='Numero de dni'
                  className='input-order'
                  {...register('dni', {
                    required: '⚠ Debe ingresar numero de documento.'
                  })}
                />
                <p className='input-error'>{errors.dni?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Cuil</label>
                <input
                  type='number'
                  id='cuil'
                  placeholder='Cuil'
                  className='input-order'
                  {...register('cuil', {
                    required: 'Debe ingresar un cuil'
                  })}
                />
                <p className='input-error'>{errors.cuil?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Saldo</label>
                <input
                  type='number'
                  id='saldo'
                  placeholder='Saldo del afiliado'
                  className='input-order'
                  {...register('saldo', {
                    required: ' ⚠ Debe ingresar monto.'
                  })}
                />
                <p className='input-error'>{errors.saldo?.message}</p>
              </div>
            </fieldset>
            {/* Domicilio */}
            <fieldset>
              <legend>Domicilio</legend>

              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Localidad</label>
                <input
                  type='text'
                  id='localidad'
                  placeholder='Localidad'
                  className='input-order'
                  {...register('localidad', {
                    required: 'Ingrese localidad'
                  })}
                />
                <p className='input-error'>{errors.localidad?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Barrio</label>
                <input
                  type='text'
                  id='barrio'
                  placeholder='Barrio'
                  className='input-order'
                  {...register('barrio', {
                    required: ' ⚠ Debe ingresar un barrio.'
                  })}
                />
                <p className='input-error'>{errors.barrio?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Calle</label>
                <input
                  type='text'
                  id='calle'
                  placeholder='Calle'
                  className='input-order'
                  {...register('calle', {
                    required: ' ⚠ Debe ingresar una calle'
                  })}
                />
                <p className='input-error'>{errors.calle?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Numero</label>
                <input
                  type='number'
                  id='numero'
                  placeholder='Numero'
                  className='input-order'
                  {...register('numero', {
                    required: 'Debe ingresar un numero'
                  })}
                />
                <p className='input-error'>{errors.cuil?.message}</p>
              </div>
              <div className='form-input-afiliado'>
                <label className='order-label-afiliado'>Numero de Departamento</label>
                <input
                  type='number'
                  id='nro_depto'
                  placeholder='Numero de departamento'
                  className='input-order'
                  {...register('nro_depto')}
                />
                <p className='input-error'>{errors.nro_depto?.message}</p>
              </div>
            </fieldset>
            {/* Contacto */}
            <div className="form-contact">
              <fieldset>
                <legend>Contacto</legend>
                <div className='form-input-afiliado'>
                  <label className='order-label-afiliado'>Telefono</label>
                  <input
                    type='number'
                    id='phone'
                    placeholder='Telefono'
                    className='input-order'
                    {...register('phone', {
                      required: ' ⚠ Debe ingresar un telefono.'
                    })}
                  />
                  <p className='input-error'>{errors.phone?.message}</p>
                </div>
                <div className='form-input-afiliado'>
                  <label className='order-label-afiliado'>Correo Electronico</label>
                  <input
                    type='email'
                    id='mail'
                    placeholder='Correo'
                    className='input-order'
                    {...register('mail', {
                      required: 'Debe ingresar un correo electronico.'
                    })}
                  />
                  <p className='input-error'>{errors.mail?.message}</p>
                </div>
              </fieldset>
            </div>

          </div>
          <div>
            <button className='btn-form-order-afiliado' type='submit'>
              Agregar
            </button>
          </div>
        </form >
      </section>
    </>
  )
}
