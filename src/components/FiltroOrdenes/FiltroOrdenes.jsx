import React, { useState, useEffect } from 'react'

const FiltroOrdenes = ({ list, getFilteredList, resetTable }) => {
    const [filter, setFilter] = useState("")
    const [tipoFiltro, setTipoFiltro] = useState("todas")
    
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
            else if(tipoFiltro ==="impagas"){
                console.log("impagas")
                return item.estado_pagado === false
            }
            return true;
        })
    )

    useEffect(()=>{
        if(filter === "" && tipoFiltro !== "impagas"){
            resetTable();
            return;
        }
        getFilteredList(filterList())
    },[filter, tipoFiltro])

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const handleTypeFilter = (event) => {
        setTipoFiltro(event.target.value)
    }

    const resetFilters = () => {
        setTipoFiltro("todas")
        setFilter("")
    }
  
    return (
        <div className="filtrar-comercio">
            <input type="text" placeholder='Buscar Orden' value={filter} onChange={handleFilter}/>
            <select onChange={handleTypeFilter}>
                <option value="todas">Todas</option>
                <option value="comercio">Comercio</option>
                <option value="afiliado">Afiliado</option>
                <option value="orden">Codigo de orden</option>
                <option value="impagas">Impagas</option>
            </select>
            <button onClick={() => resetFilters()}>Limpiar</button>
        </div>
  )
}

export default FiltroOrdenes