import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { getAfiliadoById } from '../../services/AfiliadoService';
import { getOrdenesByAfiliado } from '../../services/OrdenesService';
import { getCuotaByAfiliadoId } from '../../services/CuotaServices';

const ResumenAfiliado = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [afiliado, setAfiliado] = useState({})
    const [ordenes, setOrdenes] = useState([])
    const [cuotas, setCuotas] = useState([])
    const [encontrado, setEncontrado] = useState(false)
  
    const onSubmit = (data) => {
      const { id_afiliado } = data
      getAfiliadoById(id_afiliado).then(
        (data) => {
          setAfiliado(data)
          getOrdenesByAfiliado(id_afiliado).then(
            dataOrenes => {
              setOrdenes(dataOrenes)
              getCuotaByAfiliadoId(id_afiliado).then(
                dataCuotas => {
                  setCuotas(dataCuotas)
                  setEncontrado(true);
                }
              )
            }
          )
        }
      )  
    }
  
    return (
      <>
        <div className="section-title">
          <h4 className="text-center">Resumen de afiliado</h4>
        </div>

        <section className='searcher-container'>
          <div className='searcher-body'>
            <p className='searcher-description'>Ingrese código de afiliado.</p>
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
                  <button className='btn-nuevo-comercio btn-reset-comercio' type='reset' onClick={() => setEncontrado(false)}>Borrar</button>
              </div>
            </form>
          </div>
        
        {
          encontrado &&
          <div className="searcher-body mt-20 text-white">
            <h4>Datos del afiliado</h4>
            <p>Nombre: {afiliado.name}</p>
            <p>Codigo: {afiliado.id_afiliado}</p>
            <p>Fecha de registro: {afiliado.createdAt}</p>
            <p>Saldo: {afiliado.saldo}</p>
          </div>
        }
        
        {
          ordenes.length > 0 && 
          <div className='orders-container container-border mt-20 px-20'>
            <div className="table-title border-bottom">
              <h4 className='px-20'>Listado de ordenes</h4>
            </div>
            <div className='table-wrapper'>
              <table className='table'>
                <thead className='thead'>
                  <tr>
                    <th>Código</th>
                    <th>Comercio</th>
                    <th>Monto</th>
                  </tr>
                </thead>
                <tbody className='tbody'>
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
          </div>
        }
        
        {
          cuotas.length > 0 && 
          <div className='orders-container container-border mt-20 px-20'>
            <div className="table-title border-bottom">
              <h4 className='px-20'>Listado de cuotas</h4>
            </div>
            <div className='table-wrapper'>
              <table className='table'>
                <thead className='thead'>
                  <tr>
                    <th>Código</th>
                    <th>Vencimiento</th>
                    <th>Monto</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody className='tbody'>
                  {
                    cuotas.map( cuota => (
                      <tr key={cuota.id_cuota}>
                        <td>{cuota.id_cuota}</td>
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
        }
        
      </section>
      </>
      
    )
  }

export default ResumenAfiliado