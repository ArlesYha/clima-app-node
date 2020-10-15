const axios = require("axios")

const getClima = async (c) => {
    const clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${c.lat}&lon=${c.lng}&appid=292343b8269dc35290ee85947123b60f&units=metric`)

    if(!clima)
        throw new Error(`No se pudo determinar el clima de `, c.direccion)

    return clima
}

module.exports = {
    getClima
}