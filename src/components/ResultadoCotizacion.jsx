

export const ResultadoCotizacion = ({ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE }) => {
    return (
        <div className="text-white p-3 text-center">
            <h4 class="">
                El precio es <b>{ PRICE }</b>
            </h4>

            <p>El precio más alto del dia: <b>{ HIGHDAY }</b></p>

            <p>El precio más alto del dia: <b>{ LOWDAY }</b></p>

            <p>Variación en las últimas horas: <b>{ CHANGEPCT24HOUR }</b></p>

            <p>Última actualización: <b>{ LASTUPDATE }</b></p>
        </div>
    )
}

