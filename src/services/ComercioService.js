const URL = "http://localhost:3000/api/comercios";

export const getComercios = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.log('Error al obtener la lista de comercios');
            return null;
        }
        const data = await response.json();
        //console.log(data)
        return data
    } catch (error) {
        console.error('Error al obtener la lista de comercios:', error);
    }
}

export const addComercio = async( name, cuit, barrio, calle, numero, phone, localidad ) => {
    await fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                name,
                cuit,
                phone,
                barrio,
                calle,
                numero,
                localidad
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => { 
            console.log(data)
        })
        .catch((err) => { console.log(err.message) })
}

export const editComercio = async( id_comercio, name, cuit, barrio, calle, numero, phone, localidad ) => {
    await fetch(URL + '/' + id_comercio, {
        method: 'PUT',
        body: JSON.stringify({
            name,
            cuit,
            phone,
            barrio,
            calle,
            numero,
            localidad
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => { 
        console.log(data)
    })
    .catch((err) => { console.log(err.message) })
}

export const getComercioById = async( id_comercio) => {
    try {
        const response = await fetch(URL + '/' + id_comercio);
        if (!response.ok) {
            console.log('Error al obtener comercio');
            return null;
        }
        const data = await response.json();
        //console.log(data)
        return data
    } catch (error) {
        console.error('Error al obtener comercio:', error);
    }
}