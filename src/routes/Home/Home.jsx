import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userSession = JSON.parse(sessionStorage.getItem("user"));
    if(userSession){
      setUsername(userSession.username)
    }
  }, [])
  return (
    <div className='home-container'>
      <h1 className='text-center home-title-1'>Bienvenido/a <span className="uppercase">{username}</span></h1>
      <h4 className="text-center home-title-2">Aquí hay algunas opciones rápidas que puedes usar.</h4>
      <div className="home-quick-buttons">
        <Link className='quick-button' to="/ordenes">Ordenes</Link>
        <Link className='quick-button' to="/resumen">Resumenes</Link>
        <Link className='quick-button' to="/comercios">Comercios</Link>
        <Link className='quick-button' to="/pagos">Pagos</Link>
      </div>

      <div className="home-descriptions">
        <h4 className="home-title-2 bg-secondary">Guía rápida para el usuario</h4>
        <ul className='home-main-options'>
          <li>
            <p className="option-guide">
              <span>Afiliados:</span>En esta opción se pueden gestionar las operaciones:
              
            </p>
            <ul className='home-sublist'>
                <li>Visualizar todos los afiliados registrados en la base de datos.</li>
                <li>Registrar un nuevo afiliado.</li>
                <li>Buscar un afiliado particular.</li>
                <li>Editar datos de un afiliado.</li>
                <li>Eliminar registros de un afiliado.</li>
              </ul>
          </li>
          <li>
            <p className="option-guide">
              <span>Resumen:</span>Se puede obtener un resumen de los datos de un afiliado en particular, para ello, se requiere ingresar el código del afiliado.
            </p>
          </li>
          <li>
            <p className="option-guide">
              <span>Comercios:</span>En esta opción se pueden gestionar las operaciones:
              
            </p>
            <ul className='home-sublist'>
                <li>Visualizar todos los comercios registrados en la base de datos.</li>
                <li>Registrar un nuevo comercio.</li>
                <li>Buscar comercios por nombre.</li>
                <li>Editar datos de un comercio.</li>
                <li>Eliminar comercio de la base de datos.</li>
              </ul>
          </li>
          <li>
            <p className="option-guide">
              <span>Ordenes:</span>En esta opción se pueden gestionar las operaciones:
              
            </p>
            <ul className='home-sublist'>
                <li>Visualizar todas las ordenes emitidas.</li>
                <li>Emitir una nueva orden para un afiliado.</li>
                <li>Buscar ordenes por rango de fecha, comercio, codigo de afiliado o impagas.</li>
                <li>Registrar el pago de una orden.</li>
              </ul>
          </li>
          <li>
            <p className="option-guide">
              <span>Pagos:</span>En esta opción se puede registrar el pago de las cuotas, para ello, se debe ingresar el código del código del afiliado para visualizar las cuotas adeudadas.
            </p>
          </li>
        </ul>
        
        
      </div>
    </div>
  )
}

export default Home