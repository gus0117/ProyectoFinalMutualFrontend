// import { useMemo } from 'react'
import { IconsSearch } from '../../components/Icons'
import { Table } from '../../components/Table/Table'
import Navigation from '../Navigation/Navigation'
// import { fakeData } from '../../mocks/clientes.json'
import './Ordenes.css'
export const Ordenes = () => {
  // const data = useMemo(() => fakeData, [])
  return (
    <>
      <Navigation />
      <section className='section-container'>
        <div className='section-container-title'>
          <h4> <IconsSearch /> Buscar Orden</h4>
        </div>
        <div className='container'>
          <Table/>
        </div>
      </section>
    </>
  )
}
