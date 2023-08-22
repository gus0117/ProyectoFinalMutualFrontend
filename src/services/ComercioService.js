const URL = "http://localhost:3000/api/comercios";

export const getComercios = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.log('Error al obtener la lista de comercios');
        }
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error('Error al obtener la lista de comercios:', error);
    }
}