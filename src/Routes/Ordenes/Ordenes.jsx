import { IconsSearch } from '../../components/Icons'
import { Table } from '../../components/Table/Table'
import { Link } from 'react-router-dom';

import './Ordenes.css'

export const Ordenes = () => {

  return (
    <>
      <section className='section-container'>
        <div className='section-container-title'>
          <h4> <IconsSearch /> Buscar Orden</h4>
        <Link to={'/orden'} className='link-orden'>Nueva Orden</Link>
        </div>
        <div className='form-filter'>
        

        </div>
        <div className='container'>
          <Table />
        </div>
      </section>
    </>
  )
}