const SERVER_DOMAIN = 'http://localhost:3000/api';

export const getOrders = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/ordenes`);
    return response.json();
  } catch {
    throw new Error('could not fetch Orders');
  }
};

export const postOrders = (Order) => {
  try {
     fetch(`${SERVER_DOMAIN}/ordenes`,{
      method: 'POST',
      body: JSON.stringify(Order),
      headers:{"Content-type": "application/json; charset=UTF-8"}
      
     });
   
  } catch (error) {
    throw new Error(error);
  }
};