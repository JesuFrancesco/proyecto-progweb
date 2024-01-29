import * as React from 'react';
import { Stack, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const MenuPage = () => {
  return (
    <div className='container'>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
    <div className="carousel-inner" >
     <div className="carousel-item active">
      <img src="https://www.elespectador.com/resizer/ALZbDVzMdpJ_jmvg-88B8cNROTg=/920x613/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/EELZVZRRJNAFDD2SMMUSB6RXZI.jpg" classNameName ="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>EL NIÑO Y LA GARZA</h5>
        <p>Mahito, un chico de 12 años, lucha por asentarse en una nueva ciudad tras la muerte de su madre. Sin embargo, cuando una garza parlante informa a Mahito de que su madre sigue viva, entra en una torre abandonada en su búsqueda y llega a otro mundo.</p>
        <div
          style={{
            bottom: '10px',
            right: '10px',
            color: 'white',
          }}
        >
          <Link to="/reserva">
            <Button
            variant="outlined"
            style={{ margin:"10px" ,width: '230px',
              fontSize: '16px', color: 'white' ,
              borderColor: "white",
              borderWidth: "2px",}}>
              comprar tickets
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://elcomercio.pe/resizer/VBd_Pj6hVwG-oc2qQTAvLa33Yaw=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/PN6E2HQMJFGPRMF7PQBGQM535A.png" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>JACK EN LA CAJA MALDITA 3: EL ASCENSO</h5>
        <p>Cuando una adolescente estadounidense accede a un internado femenino del Reino Unido, sus compañeras no tardan en darse cuenta de que ha ido a buscar una misteriosa caja de juguetes escondida en el patio del colegio. Tras encontrarla y abrirla, seis alumnos se lanzan a una lucha por la supervivencia contra un demonio que escapa de su interior. ¿Lograrán salir con vida de la escuela, o el demonio cobrará las víctimas que necesita para seguir vivo.</p>
        <div
          style={{
            bottom: '10px',
            right: '10px',
            color: 'white',
          }}
        >
          <Link to="/reserva">
            <Button
            variant="outlined"
            style={{ margin:"10px" ,width: '230px',
              fontSize: '16px', color: 'white' ,
              borderColor: "white",
              borderWidth: "2px",}}>
              comprar tickets
            </Button>
          </Link>
        </div>
      </div>
      
    </div>
    <div className="carousel-item">
      <img src="https://imgmedia.larepublica.pe/640x371/larepublica/migration/images/FENKIDYTX5GX7K3ZBUYTHXTILM.webp" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>BTS: YET TO COME IN CINEMAS </h5>
        <p>Antes de hacer una pausa de dos años para cumplir el servicio militar obligatorio, el grupo BTS ofrece un concierto especial en Busan, durante el cual interpretan los grandes éxitos de su carrera.</p>
        <div
          style={{
            bottom: '10px',
            right: '10px',
            color: 'white',
          }}
        >
          <Link to="/reserva">
            <Button
            variant="outlined"
            style={{ margin:"10px" ,width: '230px',
              fontSize: '16px', color: 'white' ,
              borderColor: "white",
              borderWidth: "2px",}}>
              comprar tickets
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
        
        
    

      <div className='mt-3' style={{ textAlign: 'center' }}>
        <div>
          <TextField label="Búsqueda" variant="standard" size="medium"

          className="form-control my-3"
          placeholder="Busca por título, actores, actrices, género, etc"
          style={{width:"700px"}}
        />


        </div>
        
        <Box display="flex" justifyContent="center">
          <Stack spacing={14} direction="row">
            <Link to="/peliculas-index">
              <Button variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '230px' }}>
                Películas
              </Button>
            </Link>
            <Link to="/salas">
              <Button variant="contained" style={{ backgroundColor: "#FA7900", fontSize: '16px', color: 'white', width: '230px' }}>
                Salas
              </Button>
            </Link>
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default MenuPage;
/*/* El niño y la garza */

/* El niño y la garza */

/* El niño y la garza */





