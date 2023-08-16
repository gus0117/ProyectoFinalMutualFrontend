import React from 'react'
import './Navigation.css'
import { Link, Navigate, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className='navbar'>
        <h2 className='logo'>Mutual</h2>
        <div className="nav-links">
          <Link className='nav-link' to="/">Inicio</Link>
          <Link className='nav-link' to="afiliados">Afiliados</Link>
          <Link className='nav-link' to="comercios">Comercios</Link>
          <Link className='nav-link' to="ordenes">Ordenes</Link>
          <Link className='nav-link' to="pagos">Pagos</Link>
        </div>
        <div className='nav-link'>Salir</div>
      </div>
      <Outlet />
    </>
    
  )
}

export default Navigation