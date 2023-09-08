import React, { useState } from 'react'
import { getCuotaByAfiliadoId, pagarCuota } from '../../services/CuotaServices';
import { useForm } from 'react-hook-form';
import './Pagos.css';

const Pagos = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cuotas, setCuotas] = useState([])

  const onSubmit = (data) => {
    const { id_afiliado } = data
    getCuotaByAfiliadoId(id_afiliado).then(
      data => { 
        setCuotas(data)
        console.log(cuotas)
      }
    )
  }

  const pagarCuotaHandle = (id_cuota) => {
    pagarCuota(id_cuota).then(
      data => { console.log("Cuota pagada")}
    )
  }

  return (
    <>
      <div className="section-title">
        <h4 className="text-center">Gestión de cobro de cuotas</h4>
      </div>
      <div className='searcher-container'>
        <div className='searcher-body'>
          <p className='searcher-description'>Ingrese código de afiliado para buscar las cuotas pendientes.</p>
          <form onSubmit={handleSubmit(onSubmit)} className='searcher-form'>
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
        </div>
        
       {
        cuotas.length > 0 ? 
        <div className="orders-container container-border mt-20 px-20">
            <div className="table-title border-bottom">
              <h4 className='px-20'>Listado de cuotas</h4>
            </div>
            <div className='table-wrapper'>
              <table className='table'>
                <thead className='thead'>
                  <tr>
                    <th>Código</th>
                    <th>Vencimiento</th>
                    <th>Fecha de Pago</th>
                    <th>Monto</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody className='tbody'>
                  {
                    cuotas.map( cuota => (
                      <tr key={cuota.id_cuota}>
                        <td>{cuota.id_cuota}</td>
                        <td>{cuota.fecha_vencimiento}</td>
                        { cuota.estado_pagado ? <td>{cuota.fecha_pago}</td> : <td>Pendiente</td>}
                        <td>{cuota.monto}</td>
                        { cuota.estado_pagado ? <td>Pagado</td> : <td>No Pagado</td>}
                        <td>{ !cuota.estado_pagado ? <button className='simple-button btn-dark' onClick={() => pagarCuotaHandle(cuota.id_cuota)}>Pagar</button> : <span>No requerido</span>}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
          </div>
        </div>
        :
        <div className='mt-20'>
          <h4 className='home-title-2 bg-secondary px-20'>No hay cuotas adeudadas.</h4>
        </div>
        
        
       }
        </div>
    </>
    
  )
}

export default Pagos