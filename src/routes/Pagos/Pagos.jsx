import React, { useState } from 'react'
import { getCuotaByAfiliadoId, pagarCuota } from '../../services/CuotaServices';
import { useForm } from 'react-hook-form';

const Pagos = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cuotas, setCuotas] = useState([])

  const onSubmit = (data) => {
    const { id_afiliado } = data
    getCuotaByAfiliadoId(id_afiliado).then(
      data => { setCuotas(data) }
    )
  }

  const pagarCuotaHandle = (id_cuota) => {
    pagarCuota(id_cuota).then(
      data => { console.log("Cuota pagada")}
    )
  }

  return (
    <div className='container-nuevo-comercio'>
        <form onSubmit={handleSubmit(onSubmit)} className='form-nuevo-comercio'>
              <input type='number' placeholder='Codigo del afiliado' className='input-comercio'
              {
                  ...register('id_afiliado', {
                      required: 'Debe ingresar el Codigo del afiliado'
                  })
              } />
              <p>{errors.id_afiliado?.message}</p>
              <div className="btn-comercio-afiliado">
                  <button className='btn-nuevo-comercio btn-guardar-comercio' type='submit'>Buscar</button>
                  <button className='btn-nuevo-comercio btn-reset-comercio' type='reset'>Borrar</button>
              </div>
        </form>

        <div className='container'>
          <h1 className='table-title'>Listado Cuotas</h1>
          <table className='comercio-table'>
            <thead>
              <tr>
                <th>Código</th>
                <th>Vencimiento</th>
                <th>Fecha de Pago</th>
                <th>Monto</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                cuotas.map( cuota => (
                  <tr key={cuota.id_cuota}>
                    <td>{cuota.id_cuota}</td>
                    <td>{cuota.fecha_vencimiento}</td>
                    { cuota.estado_pagado ? <td>{cuota.fecha_pago}</td> : <td>Pendiente</td>}
                    <td>{cuota.monto}</td>
                    { cuota.estado_pagado ? <td>Pagado</td> : <td>No Pagado</td>}
                    <td>{ !cuota.estado_pagado ? <button onClick={() => pagarCuotaHandle(cuota.id_cuota)}>Pagar</button> : <button disabled>Pagar</button>}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Pagos