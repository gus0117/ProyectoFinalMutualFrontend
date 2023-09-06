import { useState, useEffect } from 'react'
import {getAfiliados} from '../../services/AfiliadoService'
import { IconEdit } from '../../components/Icons'
// import { FiltroAfiliado } from '../../components/FiltroAfiliado/FiltroAfiliado'
import './TableAfiliados.css'


export const TableAfiliados = () => {
  const [allAffiliates, setAllAffiliates] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    getAfiliados()
      .then((data) => setAllAffiliates(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch=(event)=>{
    const getSearch = event.target.value;
    setQuery(getSearch)
    console.log(getSearch)
    if(getSearch.length>0){
      const searchdata = allAffiliates.filter((item) =>item.dni.includes(getSearch))
      setAllAffiliates(searchdata)
    }
  }


  return (
    <>
    
    <input type="text" name="name" value = {query} className="form-control-afiliado" onChange={(e)=>handleSearch(e)} placeholder="Busqueda DNI" />
    <div className='table-wrapper-afiliados'>
      <table className='table-afiliados'>
        <thead className='thead-afiliados'>
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>DNI</th>
            <th>SALDO</th>
            <th>ESTADO</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='tbody-afiliados'>
          {allAffiliates.map(affiliate => (
              <tr key={affiliate.id_afiliado}>
              <td>{affiliate.name}</td>
              <td>{affiliate.lastname}</td>
              <td>{affiliate.dni}</td>
              <td>{affiliate.saldo}</td>
              { affiliate.active ? <td>Activo</td>: <td>Inactivo</td>}

              <td><span><IconEdit /></span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}