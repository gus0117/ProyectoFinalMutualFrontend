import { useForm } from 'react-hook-form'
import './Modal.css'
import { IconClose } from '../../components/Icons'

export const Modal = ({closeModal,selectedRowData,onUpdateData}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const{name,lastname,dni,cuil,phone,mail,saldo,barrio,calle,numero} = selectedRowData

  const onSubmit = (data) => {
    const confirmacion = window.confirm("¿Estás seguro de editar este afiliado?");
    if(confirmacion){
      onUpdateData(data)
      closeModal()    
    }
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
          defaultValue={name}
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
          defaultValue={lastname}
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
          defaultValue={dni}
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
          defaultValue={cuil}
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
          defaultValue={phone}
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
          defaultValue={mail}
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
          defaultValue={saldo}
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
          defaultValue={barrio}
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
          defaultValue={calle}
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
          defaultValue={numero}
        />
        <p>{errors.numero?.message}</p>


      </div>
      <button className='btn-form-modal' type='submit'>
        Modificar
      </button>
    </form >
      </div>
    </div>
  )
}
