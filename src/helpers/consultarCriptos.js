

export const consultarCriptos = async () => {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

    try {
        const response = await fetch(url)
        const { Data } = await response.json()
        const arrInfoCriptos = Data.map(criptomoneda => criptomoneda.CoinInfo)
        
        return arrInfoCriptos

        
    } catch (error) {
        
        console.log(error)
        return error

    }
}



