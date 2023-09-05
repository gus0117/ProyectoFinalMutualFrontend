const URL = "http://localhost:3000/api";

export const getCuotaByAfiliadoId = async (id_afiliado) => {
    try {
      const response = await fetch(`${URL}/cuotas/afiliado/${id_afiliado}`);
      return response.json();
    } catch {
      throw new Error('could not fetch Orders');
    }
  };