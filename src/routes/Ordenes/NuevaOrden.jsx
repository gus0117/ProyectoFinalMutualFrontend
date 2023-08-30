import { useForm } from 'react-hook-form'
import { postOrders } from '../../services/OrdenesService';
import './NuevaOrden.css'


export const NuevaOrden = () => {
  const { register, handleSubmit,reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // const { id_afiliado, id_comercio, monto_credito,fecha_vencimiento,
    //  fecha_solicitud,interes} = data
     postOrders(data)
     reset();
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
            id='id_afiliado'
            placeholder='Usuario'
            {...register('id_afiliado', {
              required: 'Debe ingresar un codigo de usuario válido.'
            })}
          />
          <p>{errors.id_afiliado?.message}</p>

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
            id='monto_credito'
            placeholder='Monto'
            {...register('monto_credito', {
              required: '⚠ Debe ingresar el monto de crédito.'
            })}
          />
          <p>{errors.monto_credito?.message}</p>
        </div>



        <div className='form-input'>
          <label >Fecha de emisión</label>
          <input
            type='date'
            id='fecha_solicitud'
            placeholder='Contraseña'
            {...register('fecha_solicitud', {
              required: 'Debe ingresar una fecha de emisión válida.'
            })}
          />
          <p>{errors.fecha_solicitud?.message}</p>
          <label >Fecha de vencimiento</label>
          <input
            type='date'
            id='fecha_vencimiento'
            placeholder='Fecha'
            {...register('fecha_vencimiento', {
              required: ' ⚠ Debe ingresar una fecha de vencimiento válida.'
            })}
          />
          <p>{errors.fecha_vencimiento?.message}</p>


          <label >Porcentaje de interés</label>
          <input
            type='number'
            id='interes'
            placeholder='Porcentaje'
            {...register('interes', {
              required: 'Debe ingresar un porcentaje de interés válido.'
            })}
          />
          <p>{errors.interes?.message}</p>
        </div>

        <button className='btn-form' type='submit'>Imprimir Orden</button>
      </form>
    </section>

  )
}
