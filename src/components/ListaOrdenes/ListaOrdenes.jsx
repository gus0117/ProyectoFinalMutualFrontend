import { useState, useEffect } from 'react'
import {getOrders, pagarOrden} from '../../services/OrdenesService'
import { IconEdit, IconDelete } from '../Icons'
import { DateRangePicker } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import './ListaOrdenes.css'
import { IconsSearch } from '../Icons'
import { Link } from 'react-router-dom';
import FiltroOrdenes from '../FiltroOrdenes/FiltroOrdenes'

export const ListaOrdenes = () => {
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    resetTable()
  }, []);


  const handleSelect = (dates) => {
    if(!dates){
      resetTable()
      return;
    }
    let filtered = allOrders.filter((order) =>{
      let orderDate = new Date(order.fecha_solicitud)
      return (orderDate >= dates[0] &&
        orderDate <= dates[1])
    })
    setAllOrders(filtered)
    console.log(dates)
  }

  const handlePagarOrden = (id_orden) => {
    if(confirm(`Desea pagar la orden ${id_orden}`)){
      pagarOrden(id_orden).then( () => {
        resetTable()
        alert(`Orden ${id_orden} pagada con exito`)
      })
    }
  }

  const resetTable = () => {
    getOrders()
      .then((data) => setAllOrders(data))
      .catch((err) => console.log(err));
  }

  return (
    <>
    <section className='section-container'>
        <div className='section-container-title'>
          <FiltroOrdenes 
            list={allOrders}
            getFilteredList={setAllOrders}
            resetTable={resetTable}
          />
          <Link to={'nuevaOrden'} className='link-orden'>Nueva Orden</Link>
        </div>
        <div className='orders-container'>
        <div className='table-wrapper'>
            <div className='dates-filter'>
              <p className='order-label'>Filtrado por fecha</p>
              <DateRangePicker onChange={handleSelect} />
            </div>
            <table className='table'>
              <thead className='thead'>
                <tr>
                  <th>DNI AFILIADO</th>
                  <th>COMERCIO</th>
                  <th>COD. DE COMERCIO</th>
                  <th>AFILIADO</th>
                  <th>COD. DE AFILIADO</th>
                  <th>FECHA EMISION</th>
                  <th>N° DE ORDEN</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                {allOrders.map(order => {
                  let date = new Date (order.fecha_solicitud)
                  return (<tr key={order.id_orden}>
                    <td>{order.afiliado.dni}</td>
                    <td>{order.comercio.name}</td>
                    <td>{order.comercio.id_comercio}</td>
                    <td>{order.afiliado.name}</td>
                    <td>{order.afiliado.id_afiliado}</td>
                    <td>{date.toLocaleDateString()}</td>
                    <td>{order.id_orden}</td>
                    { order.estado_pagado ? <td>Pagado</td>: <td>No Pagado</td>}

                    <td>
                      { !order.estado_pagado && <button className='btn-pagar-orden' onClick={() => handlePagarOrden(order.id_orden)}>Pagar</button>}
                    </td>
                  </tr>
                )}
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    
    </>
  )
}
