const argv = require("./config/yargs").argv
const lugar = require("./lugar/lugar")
const clima = require("./clima/clima")

const resp = lugar.getLugarLatLng(argv.direccion)
resp.then(resp => {
    const result = clima.getClima({
        lat: resp.lat,
        lng: resp.lng,
        direccion: argv.direccion
    })

    result.then(res => {
        console.log("ERROR" ,res.data)
    }).catch(err => {
        console.log(err)
    })
    // console.log(resp)
}).catch(err => {
    console.log("ERROR", err)
})

// const params = {
//     auth: '10840763524675e15855364x106238',
//     // region: 'US',
//     locate: argv.direccion,
//     json: '1'
// }



