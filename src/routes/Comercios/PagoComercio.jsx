import { useState, useEffect } from "react"
import { getComerciosPagos } from "../../services/ComercioService"
import './PagoComercio.css'
export const PagoComercio = () => {
  const [comercioLista, setComercioLista] = useState([])

  useEffect(() => {
    getComerciosPagos().then(data => setComercioLista(data))
  }, [])

  const handleClick = (comercio) => {
    const confirmPayment = window.confirm(
      `¿Deseas realizar el pago de ${comercio.total} para ${comercio.name}?`
    )

    if (confirmPayment) {
      const updatedComercios = comercioLista.map((c) =>
        c.id_comercio === comercio.id_comercio ? { ...c, total: 0 } : c
      );
      setComercioLista(updatedComercios);
    }
  }

return (
  <>
    <div className='table-wrapper-afiliados'>
      <table className='table-afiliados'>
        <thead className='thead-afiliados'>
          <tr>
            <th>Codigo</th>
            <th>Nombre Comercio</th>
            <th>Monto a Pagar</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody className='tbody-afiliados'>
          {comercioLista.map(comercio => (
            <tr key={comercio.id_comercio}>
              <td>{comercio.id_comercio}</td>
              <td>{comercio.name}</td>
              <td>{comercio.total}</td>
              {/* <button className='modal-button' onClick={() => handleClick(comercio)}> */}
              <td>{ !comercio.total==0 ? <button className='simple-button btn-dark' onClick={() => handleClick(comercio)}>Pagar</button> : <span>No requerido</span>}</td>            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
)
}
