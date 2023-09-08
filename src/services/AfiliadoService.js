const URL = "http://localhost:3000/api/afiliados";

export const getAfiliadoById = async( id_afiliado) => {
    try {
        const response = await fetch(URL + '/' + id_afiliado);
        if (!response.ok) {
            console.log('Error al obtener afiliado');
            return null;
        }
        const data = await response.json();
        //console.log(data)
        return data
    } catch (error) {
        console.error('Error al obtener afiliado:', error);
    }
}

export const getAfiliados = async() => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.log('Error al obtener los afiliados');
            return null;
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error al obtener afiliados:', error);
    }
}


export const postAfiliado = (afiliado) => {
    try {
       fetch(`${URL}`,{
        method: 'POST',
        body: JSON.stringify(afiliado),
        headers:{"Content-type": "application/json; charset=UTF-8"}
        
       });
     
    } catch {
      throw new Error('could not fetch post');
    }
  };

  export const deleteAfiliado = (id) => {
    try {
       fetch(`${URL}/${id}`,{
        method: 'DELETE',
        headers:{"Content-type": "application/json; charset=UTF-8"} 
       });
     
    } catch {
      throw new Error('could not fetch DELETE');
    }
  };

  export const updateAfiliado = (id,updated) => {
    try {
       fetch(`${URL}/${id}`,{
        method: 'PUT',
        headers:{"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(updated), 
       });
     
    } catch {
      throw new Error('could not fetch PUT');
    }
  };