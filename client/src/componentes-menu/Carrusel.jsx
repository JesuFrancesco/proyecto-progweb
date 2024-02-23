import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Carrusel = (props) => {
    const [indexPelicula, setindexPelicula] = useState(0);

    const handleSelect = (selectedIndex) => {
        // console.log('indice actual: ', selectedIndex)
        setindexPelicula(selectedIndex);
    };

    const estiloFont = {
        fontSize: "1.5em", 
        backgroundColor: "hsla(184, 100%, 0%, 0.44)",
        borderRadius: "30px",
        textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    }

    return <Carousel 
            activeIndex={ indexPelicula }
            onSelect={ handleSelect }
        >
        {
            props.funciones.map(funcion => {
                return <Carousel.Item interval={3000}>
                            <img
                                className='img-thumbnail w-100'
                                style={ {height: "500px", overflow: "hidden", objectFit: "cover"} }
                                src={ funcion.movie.thumbnail }
                                alt=""
                            />
                            <Carousel.Caption>
                                <Link to={`/reserva/${funcion.movie.path}`} state={{
                                    sala : funcion.sala.name,
                                    hora : funcion.window.hour,
                                    titulo : funcion.movie.title,
                                    imagen : funcion.movie.thumbnail
                                }}>
                                    <h1 style={ {fontSize: "4em"} }>{funcion.movie.title}</h1>
                                </Link>

                                <div className='my-4' style={ estiloFont }>
                                    <h2>{funcion.sala.name}</h2>
                                    <h2>{funcion.window.date} @ {funcion.window.hour}</h2>
                                    {(funcion.movie.extract.length < 150)? funcion.movie.extract : funcion.movie.extract.substring(0,150) + "..." }
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                }
            )
        }
        </Carousel>
}
export default Carrusel