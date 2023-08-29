import { useState, useEffect } from 'react'
import {getOrders} from '../../services/OrdenesService'
import { DateRangePicker } from 'react-date-range'
import { IconEdit, IconDelete } from '../Icons'
import './Table.css'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css'

export const Table = () => {
  const [allOrders, setAllOrders] = useState([])
  const [Orders, setOrders] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  useEffect(() => {
    getOrders()
      .then((data) => setAllOrders(data))
      .catch((err) => console.log(err));
  }, []);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (date) => {
    let filtered = allOrders.filter((order) =>{
      let orderDate = new Date(order.fecha_emision)
      return (orderDate >= date.selection.startDate &&
         orderDate <= date.selection.endDate )
    })
    setStartDate(date.selection.startDate)
    setEndDate(date.selection.endDate)
    setOrders(filtered)
  }
  return (
    <>
    
    <div className='table-wrapper'>
    <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
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
          {Orders.map(order => {
            console.log(Orders)
            let date = new Date (order.fecha_emision)
            return (<tr key={order.id_orden}>
              <td>{order.dni_afiliado}</td>
              <td>{order.nombre_comercio}</td>
              <td>{order.id_comercio}</td>
              <td>{order.nombre_afiliado}</td>
              <td>{order.id_afiliado}</td>
              <td>{date.toLocaleDateString()}</td>
              <td>{order.id_orden}</td>
              { order.estado_pagado ? <td>Pagado</td>: <td>No Pagado</td>}

              <td><span><IconEdit /><IconDelete /></span></td>
            </tr>
          )}
          )}
        </tbody>
      </table>
    </div>
    </>
  )
}
