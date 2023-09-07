import { useForm } from 'react-hook-form'
import './NuevoAfiliado.css'
import { postAfiliado } from '../../services/AfiliadoService';
import './Modal.css'
export const Modal = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  
  const onSubmit = (data) => {
    postAfiliado(data)
    reset();
  }
  return (
    <div className="modal-container">
      <div className="modal">
      <form className='form-order-afiliado' onSubmit={handleSubmit(onSubmit)}>
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
        <p>{errors.name?.message}</p>
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
        <p>{errors.lastname?.message}</p>
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
        <p>{errors.birthdate?.message}</p>

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
        <p>{errors.dni?.message}</p>
      </div>
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
        <p>{errors.localidad?.message}</p>
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
        <p>{errors.barrio?.message}</p>
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
        <p>{errors.calle?.message}</p>


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
        <p>{errors.cuil?.message}</p>
        <label className='order-label-afiliado'>Numero de Departamento</label>
        <input
          type='number'
          id='nro_depto'
          placeholder='Numero de departamento'
          className='input-order'
          {...register('nro_depto', {
            required: ' ⚠ Debe ingresar un numero de depto'
          })}
        />
        <p>{errors.phone?.message}</p>
        <label className='order-label-afiliado'>Estado</label>
        <input
          type='booleano'
          id='active'
          placeholder='Estado'
          className='input-order'
          {...register('active', {
            required: ' ⚠ Debe ingresar un estado'
          })}
        />
        <p>{errors.phone?.message}</p>


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
        <p>{errors.cuil?.message}</p>
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
        <p>{errors.phone?.message}</p>
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
        <p>{errors.mail?.message}</p>
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
        <p>{errors.saldo?.message}</p>
      </div>

      <button className='btn-form-order-afiliado' type='submit'>
        Agregar
      </button>
    </form >
      </div>
    </div>
  )
}
