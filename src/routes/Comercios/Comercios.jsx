import React, { useEffect, useState } from 'react'
import { getComercios } from '../../services/ComercioService';
import './Comercios.css'


const URL = "http://localhost:3000/api/comercios";

const Comercios = () => {
  const [comercios, setComercios] = useState([])
  
  useEffect(()=>{
    getComercios().then( data => {
      setComercios(data);
      //console.log(comercios);
    })
  },[])

  return (
    <div className='container'>
      <h1 className='table-title'>Listado de comercios</h1>
      <table className='comercio-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>CUIT</th>
            <th>Telefono</th>
            <th>Barrio</th>
            <th>Calle</th>
            <th>Nro</th>
            <th>Localidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
              comercios.map( comercio => (
                <tr key={comercio.id_comercio}>
                  <td>{comercio.id_comercio}</td>
                  <td>{comercio.name}</td>
                  <td>{comercio.cuit}</td>
                  <td>{comercio.phone}</td>
                  <td>{comercio.barrio}</td>
                  <td>{comercio.calle}</td>
                  <td>{comercio.numero}</td>
                  <td>{comercio.localidad}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delet</button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Comercios