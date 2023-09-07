import React from 'react'

import { ListaOrdenes } from '../../components/ListaOrdenes/ListaOrdenes'
import './Ordenes.css'
import '../../App.css'

const Ordenes = () => {
  return (
    <>
      <div className="section-title">
        <h4 className="text-center">Gestión de ordenes</h4>
      </div>
      <ListaOrdenes />
    </>
    
  )
}

export default Ordenes