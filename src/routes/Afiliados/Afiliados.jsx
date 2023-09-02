import React, { useState } from 'react'
import { getAfiliadoById } from '../../services/AfiliadoService'
import { useForm } from 'react-hook-form'
import { getOrdenesByAfiliado } from '../../services/OrdenesService';

const Afiliados = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [afiliado, setAfiliado] = useState({})
  const [ordenes, setOrdenes] = useState([])
  const [cuotas, setCuotas] = useState([])

  const onSubmit = (data) => {
    const { id_afiliado } = data
    getAfiliadoById(id_afiliado).then(
      (data) => {
        setAfiliado(data)
        getOrdenesByAfiliado(id_afiliado).then(
          dataOrenes => {
            setOrdenes(dataOrenes)
          }
        )
      }
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

      <div className="info-afiliado">
        <h4>Datos del afiliado</h4>
        <p>Nombre: {afiliado.name}</p>
        <p>Codigo: {afiliado.id_afiliado}</p>
        <p>Fecha de registro: {afiliado.createdAt}</p>
        <p>Saldo: {afiliado.saldo}</p>
      </div>

      <div className='container'>
        <h1 className='table-title'>Listado de Ordenes</h1>
        <table className='comercio-table'>
          <thead>
            <tr>
              <th>Código</th>
              <th>Comercio</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {
              ordenes.map( orden => (
                <tr key={orden.id_orden}>
                  <td>{orden.id_orden}</td>
                  <td>{orden.comercio.name}</td>
                  <td>{orden.monto_credito}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <div className='container'>
        <h1 className='table-title'>Listado Cuotas</h1>
        <table className='comercio-table'>
          <thead>
            <tr>
              <th>Código</th>
              <th>Vencimiento</th>
              <th>Monto</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              cuotas.map( cuota => (
                <tr key={cuota.id}>
                  <td>{cuota.id}</td>
                  <td>{cuota.fecha_vencimiento}</td>
                  <td>{cuota.monto}</td>
                  { cuota.estado_pagado ? <td>Pagado</td> : <td>No Pagado</td>}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Afiliados