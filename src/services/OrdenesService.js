const SERVER_DOMAIN = 'http://localhost:3000/api';

export const getOrders = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/ordenes`);
    return response.json();
  } catch {
    throw new Error('could not fetch Orders');
  }
};

export const addOrders = async (id_afiliado, id_comercio, monto_credito, fecha_vencimiento, fecha_solicitud, interes) => {
  try {
     fetch(`${SERVER_DOMAIN}/ordenes`,{
      method: 'POST',
      body: JSON.stringify({
        id_afiliado,
        id_comercio,
        monto_credito,
        fecha_solicitud,
        fecha_vencimiento,
        interes,
        cuota: [{fecha_vencimiento: fecha_vencimiento, monto: (monto_credito * (1 + interes))}]
      }),
      headers:{"Content-type": "application/json; charset=UTF-8"}
      
     });
   
  } catch (error) {
    throw new Error(error);
  }
};

export const pagarOrden = async (id_orden) => {
  try {
    fetch(`${SERVER_DOMAIN}/ordenes/${id_orden}`,{
     method: 'PUT',
     body: JSON.stringify({
       fecha_pago: new Date()
     }),
     headers:{"Content-type": "application/json; charset=UTF-8"}
     
    });
  
 } catch (error) {
   throw new Error(error);
 }
}

export const getOrdenesByAfiliado = async (id_afiliado) => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/ordenes/afiliado/${id_afiliado}`);
    return response.json();
  
 } catch (error) {
   throw new Error(error);
 }
}