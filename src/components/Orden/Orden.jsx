import { useForm } from 'react-hook-form'
import './Orden.css'


export const Orden = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <section className='section-container'>
      <div className='section-container-title'>
        
        <h4>Nueva Orden</h4>
      </div>
      <form className='form-order' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-input'>
          <label >Codigo de Usuario</label>
          <input
            type='number'
            id='id_usuario'
            placeholder='Usuario'
            {...register('id_usuario', {
              required: 'Debe ingresar un codigo de usuario válido.'
            })}
          />
          <p>{errors.id_usuario?.message}</p>

          <label>Codigo de comercio</label>
          <input
            type='number'
            id='id_comercio'
            placeholder='Comercio'
            {...register('id_comercio', {
              required: '⚠ Debe ingresar un codigo de usuario válido'
            })}
          />
          <p>{errors.id_comercio?.message}</p>

          <label>Monto de crédito</label>
          <input
            type='number'
            id='creditAmount'
            placeholder='Monto'
            {...register('creditAmount', {
              required: '⚠ Debe ingresar el monto de crédito.'
            })}
          />
          <p>{errors.creditAmount?.message}</p>
        </div>



        <div className='form-input'>
          <label >Fecha de emisión</label>
          <input
            type='date'
            id='issueDate'
            placeholder='Contraseña'
            {...register('issueDate', {
              required: 'Debe ingresar una fecha de emisión válida.'
            })}
          />
          <p>{errors.issueDate?.message}</p>
          <label >Fecha de vencimiento</label>
          <input
            type='date'
            id='expiryDate'
            placeholder='Fecha'
            {...register('expiryDate', {
              required: ' ⚠ Debe ingresar una fecha de vencimiento válida.'
            })}
          />
          <p>{errors.expiryDate?.message}</p>


          <label >Porcentaje de interés</label>
          <input
            type='number'
            id='interestRate'
            placeholder='Contraseña'
            {...register('interestRate', {
              required: 'Debe ingresar un porcentaje de interés válido.'
            })}
          />
          <p>{errors.interestRate?.message}</p>
        </div>

        <button className='btn-form'>Imprimir Orden</button>
      </form>
    </section>

  )
}
