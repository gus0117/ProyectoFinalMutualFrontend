import React, { useEffect } from 'react'
import { getComercios } from '../../services/ComercioService';

const Comercios = () => {
  
  useEffect(()=>{
    getComercios()
  },[])

  return (
    <div>Comercios</div>
  )
}

export default Comercios