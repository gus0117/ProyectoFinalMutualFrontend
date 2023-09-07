import { Link } from 'react-router-dom';
import { TableAfiliados } from "./TableAfiliados"
import { IconsSearch, IconAdd } from "../../components/Icons"
import './Afiliados.css'
const Afiliados = () => {

  return (
    <section>
      <div className='add-afiliado'>
        <Link className='link-afiliado' to={'nuevoAfiliado'} > <IconAdd /> Nuevo Afiliado </Link>
      </div>
      <article className='section-container-title-afiliado'>
        <h4> <IconsSearch /> Buscar Afiliado </h4>
      </article>
      <TableAfiliados />
    </section>
  )
}

export default Afiliados