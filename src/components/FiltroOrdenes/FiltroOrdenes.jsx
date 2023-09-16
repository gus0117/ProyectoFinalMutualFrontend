import React, { useState, useEffect } from 'react'
import './FiltroOrdenes.css'

const FiltroOrdenes = ({ list, getFilteredList, resetTable }) => {
    const [filter, setFilter] = useState("")
    const [tipoFiltro, setTipoFiltro] = useState("todas")
    const [mostrarImpagas, setMostrarImpagas] = useState(false)
    
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
        if(filter === "" && !mostrarImpagas){
            resetTable();
            return;
        }
        let listaFiltrada = filterList()
        if(mostrarImpagas){
           listaFiltrada = listaFiltrada.filter( item => item.estado_pagado === false)
        }
        getFilteredList(listaFiltrada)
    },[filter, tipoFiltro, mostrarImpagas])

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const handleTypeFilter = (event) => {
        setTipoFiltro(event.target.value)
    }

    const handleCheckbox = (event) => {
        setMostrarImpagas(!mostrarImpagas)
    }

    const resetFilters = () => {
        setFilter("")
        resetTable()
    }
  
    return (
        <div className="filtrar-comercio centrado-horizontal">
            <input type="text" className="form-control-comercio"  placeholder='Buscar Orden' value={filter} onChange={handleFilter}/>
            <select onChange={handleTypeFilter}>
                <option value="todas">Todas</option>
                <option value="comercio">Comercio</option>
                <option value="afiliado">Afiliado</option>
                <option value="orden">Codigo de orden</option>
            </select>
            <input type="checkbox" value={mostrarImpagas} name='impagas' onChange={handleCheckbox}/>
            <label htmlFor="impagas" className='text-white'>Mostrar ordenes impagas</label>
            {/* <button onClick={() => resetFilters()} className="simple-button btn-white">Limpiar</button> */}
        </div>
  )
}

export default FiltroOrdenes