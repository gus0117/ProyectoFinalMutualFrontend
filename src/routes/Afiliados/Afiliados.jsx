import { IconsSearch } from "../../components/Icons"
import './Afiliados.css'
import { TableAfiliados } from "./TableAfiliados"
const Afiliados = () => {

  return (
    <section>
      <div>
        <div className='section-container-title-afiliado'>
          <h4> <IconsSearch /> Buscar Afiliado</h4>
          {/* <Link to={'/orden'} className='link-orden'>Nueva Orden</Link> */}        
        </div>
      </div>

      <TableAfiliados />
    </section>
  )
}

export default Afiliados