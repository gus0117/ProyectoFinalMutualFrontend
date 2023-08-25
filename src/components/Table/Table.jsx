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
          </tr>
        </thead>
        <tbody className='tbody'>
          {Orders.map(order => (
            <tr key={order.id_orden}>
              <td>{order.dni_afiliado}</td>
              <td>{order.nombre_comercio}</td>
              <td>{order.id_comercio}</td>
              <td>{order.nombre_afiliado}</td>
              <td>{order.id_afiliado}</td>
              <td>{order.fecha_emision}</td>
              <td>{order.id_orden}</td>
              <td><span><IconEdit /><IconDelete /></span></td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  )
}
