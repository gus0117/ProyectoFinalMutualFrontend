import { useState, useEffect } from 'react'
import {deleteAfiliado, getAfiliados} from '../../services/AfiliadoService'
import { IconDelete, IconEdit } from '../../components/Icons'
// import { FiltroAfiliado } from '../../components/FiltroAfiliado/FiltroAfiliado'
import './TableAfiliados.css'



export const TableAfiliados = () => {
  const [allAffiliates, setAllAffiliates] = useState([])
  const [affiliates, setAffiliates] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    getAfiliados()
      .then((data) => {
        setAllAffiliates(data);
        setAffiliates(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch=(event)=>{
    const getSearch = event.target.value;
    setQuery(getSearch)
    if(getSearch.length>0){
      const searchdata = allAffiliates.filter((item) =>item.dni.includes(getSearch))
      setAllAffiliates(searchdata)
    }else{
      setAllAffiliates(affiliates)
    }
  }

  const handleDelete=(id)=>{
    const updatedAffiliates = allAffiliates.filter((affiliate) => affiliate.id_afiliado !== id);
    setAllAffiliates(updatedAffiliates);
    deleteAfiliado(id)
  }


  return (
    <>
    <input type="text"  name="name" value = {query} className="form-control-afiliado" onChange={(e)=>handleSearch(e)} placeholder="Busqueda DNI" />
    <div className='table-wrapper-afiliados'>
      <table className='table-afiliados'>
        <thead className='thead-afiliados'>
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>DNI</th>
            <th>CUIL</th>
            <th>TELEFONO</th>
            <th>MAIL</th>
            <th>SALDO</th>
            <th>BARRIO</th>
            <th>CALLE</th>
            <th>NUMERO</th>
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
              <td>{affiliate.cuil}</td>
              <td>{affiliate.phone}</td>
              <td>{affiliate.mail}</td>
              <td>{affiliate.saldo}</td>
              <td>{affiliate.barrio}</td>
              <td>{affiliate.calle}</td>
              <td>{affiliate.numero}</td>
              { affiliate.active ? <td>Activo</td>: <td>Inactivo</td>}
              <td>
                  <span>
                    <IconEdit />
                    <button className='delete-button' onClick={() => handleDelete(affiliate.id_afiliado)}>
                      <IconDelete />
                    </button>
                  </span>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}