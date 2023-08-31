import React from 'react'
import { IconsSearch } from '../../components/Icons'
import { Link } from 'react-router-dom';
import { ListaOrdenes } from '../../components/ListaOrdenes/ListaOrdenes'
import './Ordenes.css'

const Ordenes = () => {
  return (
    <>
      <section className='section-container'>
        <div className='section-container-title'>
          <h4> <IconsSearch /> Buscar Orden</h4>
          <Link to={'nuevaOrden'} className='link-orden'>Nueva Orden</Link>
        </div>
        <div className='orders-container'>
          <ListaOrdenes />
        </div>
      </section>
    </>
  )
}

export default Ordenes