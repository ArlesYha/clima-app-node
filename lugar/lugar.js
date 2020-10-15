const axios = require("axios")

const getLugarLatLng = async (direccion) => {
    const params = {
        auth: '10840763524675e15855364x106238',
        // region: 'PE',
        locate: direccion,
        json: '1'
    }

    const resp = await axios.get("https://geocode.xyz", {params})

    if(resp.data.standard.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    
    return {
        // data: resp.data.standard,
        direccion: resp.data.standard.city,
        lat: resp.data.latt,
        lng: resp.data.longt
    }
}

module.exports = {
    getLugarLatLng
}
