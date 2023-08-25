import './Navigation.css'

const Navigation = () => {  

  return (
    <>
      <div className='navbar'>
        <h2 className='logo'>Mutual</h2>
          <div className="nav-links">
            <a className='nav-link' to="inicio">Inicio</a>
            <a className='nav-link' to="afiliados">Afiliados</a>
            <a className='nav-link' to="comercios">Comercios</a>
            <a className='nav-link' to="ordenes">Ordenes</a>
            <a className='nav-link' to="pagos">Pagos</a>
          </div>
          <div className='nav-link'>Salir</div>
        </div>
    </>
    
  )
}

export default Navigation