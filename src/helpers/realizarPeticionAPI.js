export const realizarPeticionAPI = async (criptomoneda, moneda) => {

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    try {
        const response = await fetch(url)
        const  { DISPLAY }  = await response.json()
        const resultadoCotizacion = DISPLAY[criptomoneda][moneda]
        return resultadoCotizacion
        
    } catch (error) {
        console.log(error);
        return error
    }


}



