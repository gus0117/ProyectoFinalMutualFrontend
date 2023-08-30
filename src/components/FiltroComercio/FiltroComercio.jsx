import React, { useEffect, useState } from 'react'

const FiltroComercio = ({ list, getFilteredList, resetTable }) => {
    const [filter, setFilter] = useState("")
    
    const filterList = () => (
        list.filter( item => (
            item.name.toLowerCase().includes(filter.toLowerCase())
        ))
    )

    useEffect(()=>{
        if(filter === ""){
            resetTable();
            return;
        }
        getFilteredList(filterList())
        console.log(list);
    },[filter])

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }
  return (
    <div className="filtrar-comercio">
        <input type="text" placeholder='Nombre del comercio' value={filter} onChange={handleFilter}/>
        <button onClick={() => setFilter("")}>Limpiar</button>
    </div>
  )
}

export default FiltroComercio