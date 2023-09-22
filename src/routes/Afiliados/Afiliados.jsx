import { Link } from 'react-router-dom'
import { TableAfiliados } from "./TableAfiliados"
import { IconsSearch, IconAdd } from "../../components/Icons"
import './Afiliados.css'

const Afiliados = () => {
  return (
    <>

      <div className="section-title">
        <h4 className="text-center">Gestión de afiliados</h4>
      </div>
      <section>
      <article className='section-container-title-comercio'>
          <h4>Listado de Afiliados</h4>
          <Link className='nuevo-comercio' to={'nuevoAfiliado'} > Nuevo Afiliado </Link>
        </article>
        {/* <div className='add-afiliado'>
          <Link className='link-afiliado' to={'nuevoAfiliado'} > Nuevo Afiliado </Link>
        </div> */}
        <article className='section-container-title-afiliado'>
          <h5> <IconsSearch /> Buscar Afiliado </h5>
        </article>
        <TableAfiliados />
      </section>
    </>

  )
}

export default Afiliados