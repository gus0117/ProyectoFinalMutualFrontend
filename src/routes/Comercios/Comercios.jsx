import { useEffect, useState } from 'react'
import { deleteComercio, getComercios } from '../../services/ComercioService';
import { Link } from 'react-router-dom';
import FiltroComercio from '../../components/FiltroComercio/FiltroComercio';
import { IconDelete, IconEdit } from '../../components/Icons';
import './Comercios.css';

const Comercios = () => {
  const [comercios, setComercios] = useState([])

  const getFilteredList = (filteredList) => {
    setComercios(filteredList)
  }

  const resetTable = () => {
    getComercios().then(data => {
      setComercios(data);
    })
  }


  useEffect(() => {
    resetTable();
  }, [])

  return (
    <>
      <div className="section-title">
        <h4 className="text-center">Gestión de comercios</h4>
      </div>
      <section>
        <article className='section-container-title-comercio'>
          <h4>  Listado Comercio </h4>
          <Link className='nuevo-comercio' to="pagoComercio">Pago a Comercio</Link>
          <Link className='nuevo-comercio' to="nuevoComercio">Nuevo Comercio</Link>
        </article>
        
        <FiltroComercio
          list={comercios}
          getFilteredList={getFilteredList}
          resetTable={resetTable}
        />


        <div className='table-wrapper-afiliados'>
          {/* <h1 className='table-afiliados'>Listado de comercios</h1> */}
          <table className='table-afiliados'>
            <thead className='thead-afiliados'>
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
            <tbody className='tbody-afiliados'>
              {
                comercios.map(comercio => (
                  <tr key={comercio.id_comercio}>
                    <td>{comercio.id_comercio}</td>
                    <td>{comercio.name}</td>
                    <td>{comercio.cuit}</td>
                    <td>{comercio.phone}</td>
                    <td>{comercio.barrio}</td>
                    <td>{comercio.calle}</td>
                    <td>{comercio.numero}</td>
                    <td>{comercio.localidad}</td>
                    <td className='d-flex'>
                      <div className='simple-button btn-dark'>
                        <Link to={`editarComercio/${comercio.id_comercio}`}>
                          <IconEdit />
                        </Link>
                      </div>
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
      </section>

    </>
  )
}

export default Comercios