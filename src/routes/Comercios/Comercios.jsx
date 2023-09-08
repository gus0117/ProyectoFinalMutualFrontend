import React, { useEffect, useState } from 'react'
import { deleteComercio, getComercios } from '../../services/ComercioService';
import './Comercios.css'
import { Link } from 'react-router-dom';
import FiltroComercio from '../../components/FiltroComercio/FiltroComercio';
import { IconDelete, IconEdit } from '../../components/Icons';

const Comercios = () => {
  const [comercios, setComercios] = useState([])

  const getFilteredList = (filteredList) => {
    setComercios(filteredList)
  }

  const resetTable = () => {
    getComercios().then( data => {
      setComercios(data);
    })
  }

  useEffect(()=>{
    resetTable();
  },[])

  return (
    <>
      <div className="section-title">
        <h4 className="text-center">Gestión de comercios</h4>
      </div>
      <section className='section-container'>
          <div className='section-container-title d-flex align-items-center justify-content-between'>
            <div className="btn-container-comercio">
              <Link className='nuevo-comercio' to="nuevoComercio">Nuevo Comercio</Link>
            </div>
            <FiltroComercio 
              list={comercios}
              getFilteredList={getFilteredList}
              resetTable={ resetTable }
            />
          </div>
          
          <div className='orders-container'>
              <div className='table-wrapper'>
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
                                <Link className='simple-button btn-dark' to={`editarComercio/${comercio.id_comercio}`}>
                                    <IconEdit />
                                </Link>
                                <button className='simple-button btn-danger' onClick={() => deleteComercio(comercio.id_comercio)}>
                                  <i>
                                      <IconDelete />
                                  </i>
                                </button>
                              </td>
                            </tr>
                          ))
                        }
                    </tbody>
                  </table>
              </div>
          </div>
      </section>
      
    </>
  )
}

export default Comercios