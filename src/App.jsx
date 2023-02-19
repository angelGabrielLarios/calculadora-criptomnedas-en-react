import criptos from './assets/imgs/cryptomonedas.png';
import Form from './components/Form';

const App = () => {
    return (
        <div className="container mt-5">
            <section className="row min-vh-100 align-items-start mx-0 ">
                <article className="col-lg-6 col-12">
                    <img src={criptos} alt="criptos" className='d-block mx-auto' width={400}/>
                </article>
                <article className="col-lg-6 col-12 d-flex flex-column gap-3 order-first order-lg-last">
                    <Form/>
                </article>
            </section>
        </div>
    )
}

export default App