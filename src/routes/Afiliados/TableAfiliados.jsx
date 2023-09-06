import { useState, useEffect } from 'react'
import {getAfiliados} from '../../services/AfiliadoService'
import { IconEdit } from '../../components/Icons'
import './TableAfiliados.css'


export const TableAfiliados = () => {
  const [allAffiliates, setAllAffiliates] = useState([])
 

  useEffect(() => {
    getAfiliados()
      .then((data) => setAllAffiliates(data))
      .catch((err) => console.log(err));
  }, []);


  // const handleSelect = (date) => {
  //   let filtered = allAffiliates.filter((order) =>{
  //   let orderDate = new Date(order.fecha_emision)
  //   return (orderDate >= date[0] &&
  //      orderDate <= date[1])
  // })
  // setAllAffiliates(filtered)
  //   console.log(date)
  
  // }
  return (
    <>
    
    <div className='table-wrapper-afiliados'>
      <table className='table-afiliados'>
        <thead className='thead-afiliados'>
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>DNI</th>
            <th>SALDO</th>
            <th>DNI</th>
            <th>ACTIVO</th>
          </tr>
        </thead>
        <tbody className='tbody-afiliados'>
          {allAffiliates.map(affiliate => (
              <tr key={affiliate.id_afiliado}>
              <td>{affiliate.name}</td>
              <td>{affiliate.lastname}</td>
              <td>{affiliate.dni}</td>
              <td>{affiliate.saldo}</td>
              { affiliate.active ? <td>Activo</td>: <td>Inactivo</td>}

              <td><span><IconEdit /></span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}