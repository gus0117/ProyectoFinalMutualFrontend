const SERVER_DOMAIN = 'http://localhost:3000/api';

export const getOrders = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/ordenes`);
    return response.json();
  } catch {
    throw new Error('could not fetch Orders');
  }
};

