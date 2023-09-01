import React, { useState, useEffect } from 'react'

const FiltroOrdenes = ({ list, getFilteredList, resetTable }) => {
    const [filter, setFilter] = useState("")
    const [tipoFiltro, setTipoFiltro] = useState("comercio")
    
    const filterList = () => (
        list.filter( item => {
            if(tipoFiltro === "comercio"){
                return item.comercio.name.toLowerCase().includes(filter.toLowerCase())
            }
            else if(tipoFiltro === "afiliado"){
                return item.afiliado.name.toLowerCase().includes(filter.toLowerCase())
            }
            else if(tipoFiltro === "orden"){
                return item.id_orden === Number(filter)
            }
            return true;
        })
    )

    useEffect(()=>{
        if(filter === ""){
            resetTable();
            return;
        }
        getFilteredList(filterList())
    },[filter])

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const handleTypeFilter = (event) => {
        setTipoFiltro(event.target.value)
    }
  
    return (
        <div className="filtrar-comercio">
            <input type="text" placeholder='Buscar Orden' value={filter} onChange={handleFilter}/>
            <select onChange={handleTypeFilter}>
                <option value="comercio">Comercio</option>
                <option value="afiliado">Afiliado</option>
                <option value="orden">Codigo de orden</option>
            </select>
            <button onClick={() => setFilter("")}>Limpiar</button>
        </div>
  )
}

export default FiltroOrdenes