import { formatDate } from "../Utils/DatesFunctions";

const URL = "http://localhost:3000/api";

export const getCuotaByAfiliadoId = async (id_afiliado) => {
    try {
      const response = await fetch(`${URL}/cuotas/afiliado/${id_afiliado}`);
      return response.json();
    } catch {
      throw new Error('could not fetch Orders');
    }
  };

export const pagarCuota = async (id_cuota) => {
    try {
        const currentDate = formatDate(new Date())
        fetch(`${URL}/cuotas/${id_cuota}`,{
         method: 'PUT',
         body: JSON.stringify({
           fecha_pago: currentDate
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        });
      
     } catch (error) {
       throw new Error(error);
     }
}