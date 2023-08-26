import { useState, useEffect } from 'react'
import {getOrders} from '../../services/OrdenesService'
import { IconEdit, IconDelete } from '../Icons'
import './Table.css'

export const Table = () => {
  const [Orders, setOrders] = useState([])
  useEffect(() => {
    getOrders()
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='table-wrapper'>
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
          {Orders.map(order => (
            <tr key={order.id_orden}>
              <td>{order.afiliado.dni}</td>
              <td>{order.comercio.name}</td>
              <td>{order.comercio.id_comercio}</td>
              <td>{order.afiliado.name}</td>
              <td>{order.afiliado.id_afiliado}</td>
              <td>{order.fecha_solicitud}</td>
              <td>{order.id_orden}</td>
              { order.estado_pagado ? <td>Pagado</td>: <td>No Pagado</td>}

              <td><span><IconEdit /><IconDelete /></span></td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}
