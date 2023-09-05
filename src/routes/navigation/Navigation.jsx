import React, { useContext, useEffect } from 'react'
import './Navigation.css'
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

const Navigation = () => {

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
      sessionStorage.clear();
      setUser(null);
      navigate('login')
  }

  useEffect(() => {
    let userData = JSON.parse(sessionStorage.getItem("user"))
    if(userData){
      setUser(userData)
      navigate('inicio')
    }
    else{
      navigate('login')
    }
  }, [])

  return (
    <>
      <div className='navbar'>
        <h2 className='logo'>Mutual</h2>
          <div className="nav-links">
            <Link className='nav-link' to="inicio">Inicio</Link>
            <Link className='nav-link' to="afiliados">Afiliados</Link>
            <Link className='nav-link' to="resumen">Resumen</Link>
            <Link className='nav-link' to="comercios">Comercios</Link>
            <Link className='nav-link' to="ordenes">Ordenes</Link>
            <Link className='nav-link' to="pagos">Pagos</Link>
          </div>
          <a className='nav-link' onClick={handleLogOut}>Salir</a>
        </div>
      <Outlet />
    </>
    
  )
}

export default Navigation