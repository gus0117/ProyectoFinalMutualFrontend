const SERVER_DOMAIN = 'https://64e65fa409e64530d17ff0a9.mockapi.io/api/v1';

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
     fetch(`${SERVER_DOMAIN}/orden`,{
      method: 'POST',
      body: JSON.stringify(Order),
      headers:{"Content-type": "application/json; charset=UTF-8"}
      
     });
   
  } catch (error) {
    throw new Error(error);
  }
};