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