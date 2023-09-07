import { useForm } from 'react-hook-form'
import './Modal.css'
import { IconClose } from '../../components/Icons'

export const Modal = (closeModal,selectedRowData) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  
  const onSubmit = (data) => {
    // postAfiliado(data)
    console.log(data)
    // reset();
    
  }
  return (
    <div className="modal-container">
      <div className="modal">
        <button className='modal-button' onClick={closeModal}>
        <IconClose/>
        </button>
        <h2 className='modal-title'>Editar Afiliado</h2>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <div className='form-input-afiliado'>
        <input
          type='text'
          id='name'
          placeholder='Nombre Afiliado'
          className='input-order'
          {...register('name', {
            required: 'Debe ingresar un Nombre'
          })}
          value={selectedRowData?.name || ''}
        />
        <p>{errors.name?.message}</p>
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
        <input
          type='number'
          id='numero'
          placeholder='Numero'
          className='input-order'
          {...register('numero', {
            required: 'Debe ingresar un numero'
          })}
        />
        <p>{errors.numero?.message}</p>
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
      <button className='btn-form-modal' type='submit'>
        Modificar
      </button>
    </form >
      </div>
    </div>
  )
}
