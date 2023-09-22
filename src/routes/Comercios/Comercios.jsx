import { useContext, useEffect, useState } from 'react'
import { deleteComercio, getComercios, editComercio } from '../../services/ComercioService';
import { ComercioContext } from '../../context/ComercioContext';
import { Link } from 'react-router-dom';
import FiltroComercio from '../../components/FiltroComercio/FiltroComercio';
import { IconDelete, IconEdit } from '../../components/Icons';
import { ModalComercio } from './ModalComercio';
import { mostrarDialogoConfirmacion } from '../../Utils/SweetAlert'
import './Comercios.css';

const Comercios = () => {
  const { comercios, setComercios } = useContext(ComercioContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

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

  const handleEditClick = (data) => {
    setModalVisible(true);
    setSelectedRowData(data);
  };

  const closeModal = () => {
    setModalVisible(false);
  }

  const handleUpdateData = (updatedData) => {
    const updatedComercios = comercios.map((comercio) => {
      if (comercio.id_comercio === selectedRowData.id_comercio) {
        return updatedData
      }
      return comercio
    });

    setComercios(updatedComercios);
    editComercio(selectedRowData.id_comercio, updatedData);
    closeModal();
  }

  
  const handleDelete = async (id, nombre ) => {
    const confirmacion = await mostrarDialogoConfirmacion("Confirmar operación", `¿Desea eliminar el comercio "${nombre}"?`)
    if (confirmacion) {
      const updatedComercio = comercios.filter((comercio) => comercio.id_comercio !== id);
      setComercios(updatedComercio);
      deleteComercio(id)
    }
  }


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
                    <td>
                      <span>
                        <button className='simple-button btn-dark' onClick={() => handleEditClick(comercio)}>
                          <IconEdit />
                        </button>
                        <button className='simple-button btn-danger' onClick={() => handleDelete(comercio.id_comercio, comercio.name)}>
                          <i>
                            <IconDelete />
                          </i>
                        </button>
                      </span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </section>

      {modalVisible && <ModalComercio closeModal={closeModal} selectedRowData={selectedRowData} onUpdateData={handleUpdateData} />}

    </>
  )
}

export default Comercios