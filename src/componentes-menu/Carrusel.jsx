import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

const Carrusel = (props) => {
    const [indexPelicula, setindexPelicula] = useState(0);

    const handleSelect = (selectedIndex) => {
        console.log('indice actual: ', selectedIndex)
        setindexPelicula(selectedIndex);
    };

    return <Carousel 
        activeIndex={ indexPelicula }
        onSelect={ handleSelect }
        >
        {
            props.peliculas.map((pelicula) => {
            return <Carousel.Item interval={1500}>
                        <img
                            className='img-thumbnail w-100'
                            style={ {height: "500px", overflow: "hidden", objectFit: "cover"} }
                            src={pelicula.url}
                            alt=""
                        />
                        <Carousel.Caption>
                            <h1 style={ {fontSize: "3em"} }>{pelicula.peliName}</h1>
                            <div className='my-4' style={ {fontSize: "1.5em", textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"} }>{pelicula.sinopsis}</div>
                        </Carousel.Caption>
                    </Carousel.Item>
            })
        }
        </Carousel>
}
export default Carrusel