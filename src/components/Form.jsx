import { useEffect, useState } from 'react'
import {LoaderHamnster, ResultadoCotizacion, AlertaError}  from './index'
import {useForm} from '../hook/useForm'
import {consultarCriptos, realizarPeticionAPI} from '../helpers/index';

const Form = () => {
    const [componente, setComponente] = useState(null)

    const { formData, moneda, criptomoneda, onInputChange } = useForm({
        moneda: '',
        criptomoneda: ''
    });

    const [criptos, setCriptos] = useState([])

    const obtenerCriptos = async () => {
        const newCriptos = await consultarCriptos()
        setCriptos(newCriptos)
    }


    useEffect(() => {
        obtenerCriptos()
    }, [])

    const onCotizarSubmit =  async (event) => {

        event.preventDefault()

        const tieneInfoVacia = Object.values(formData).includes('')

        if (tieneInfoVacia) {
            setComponente(
                <AlertaError  mensaje={`Todos los campos son obligatorios`}/>
            )
            return
        }

        
        setComponente(
            <div className='d-flex justify-content-center'>
                <LoaderHamnster />
            </div>
        )

        const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = await realizarPeticionAPI(criptomoneda, moneda)

        setComponente(
            <ResultadoCotizacion PRICE={PRICE} HIGHDAY={HIGHDAY} LOWDAY={LOWDAY} CHANGEPCT24HOUR={CHANGEPCT24HOUR} LASTUPDATE={LASTUPDATE}/>
        )


    }


    return (
        <>
            <form action="" className='d-flex flex-column gap-4'>

                <div className="">

                    <label htmlFor="moneda" className="form-label text-white fw-bold fs-4">
                        Escoge tu moneda
                    </label>

                    <select name="moneda" id="moneda" className='form-select' value={moneda} onChange={onInputChange}>
                        <option value="" >Escoge tu moneda</option>
                        <option value="USD">Dolar Estadounidense</option>
                        <option value="MXN">Peso Mexicano</option>
                        <option value="GBP">Libras</option>
                        <option value="EUR">Euros</option>
                    </select>
                </div>

                <div className="">

                    <label htmlFor="criptomoneda" className="form-label text-white fw-bold fs-4">
                        Escoge tu criptomoneda
                    </label>

                    <select name="criptomoneda" id="criptomoneda" className='form-select' value={criptomoneda} onChange={onInputChange}>

                        <option value="">Escoge tu criptomoneda</option>
                        {
                            criptos.map(({ Name, FullName }) => (
                                <option value={Name} key={Name}>{FullName}</option>
                            ))
                        }
                    </select>
                </div>

                <button className="btn btn-lg btn-info w-100 text-white fw-bold text-uppercase" type='submit' onClick={onCotizarSubmit}>
                    Cotizar
                </button>
            </form>

            {
                componente
            }
        </>


    )
}

export default Form