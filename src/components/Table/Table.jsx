import {IconEdit, IconDelete} from '../Icons'
import './Table.css'
export const Table = () => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <th className='expand data-label'>DNI AFILIADO</th>
            <th className='expand data-label'>COMERCIO</th>
            <th>COD. DE COMERCIO</th>
            <th className='expand'>AFILIADO</th>
            <th className='expand'>COD. DE AFILIADO</th>
            <th>FECHA EMISION</th>
            <th className='expand'>ESTADO</th>
            <th>N° DE ORDEN</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          <tr>
          <td>42555352</td>
          <td>Comodin</td>
          <td>212</td>
          <td>Pepe Algo</td>
          <td>360</td>
          <td>22/10/2022</td>
          <td>False</td>
          <td>3555</td>
          <td><span><IconEdit /><IconDelete/></span></td>
          </tr>
          <tr>
          <td>42555352</td>
          <td>Comodin</td>
          <td>212</td>
          <td>Pepe Algo</td>
          <td>360</td>
          <td>22/10/2022</td>
          <td>False</td>
          <td>3555</td>
          <td><span><IconEdit /><IconDelete/></span></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
