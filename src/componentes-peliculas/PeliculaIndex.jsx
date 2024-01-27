import { useState } from "react";
import Pelicula from "./Pelicula"
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const PeliculaIndex = () => {
    const peliculas = [
        {
            url: "https://teinvitoalcine.com/download/multimedia.normal.82ab3bd8d57ac9aa.QmVla2VlcGVyIFNlbnRlbmNpYSBkZSBNdWVydGUgSmFfbm9ybWFsLndlYnA%3D.webp",
            peliHora: "1 hrs 50 min",
            peliName: "Beekeper Sentencia de Muerte",
            peliTimes: ["Acción", "+14"]
        },
        {
            url: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001906?referenceScheme=HeadOffice&allowPlaceHolder=true",
            peliHora: "1 hrs 20 min",
            peliName: "La super Familia",
            peliTimes: ["Familiar", "APT"]
        },
        {
            url: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-12343363937.jpg",
            peliHora: "2 hrs 10 min",
            peliName: "Aquaman y el Reino Perdido",
            peliTimes: ["Acción", "+14"]
        },
        {
            url: "https://zonasyc.com/wp-content/uploads/2024/01/nino-garza-1.jpg",
            peliHora: "2 hrs 10 min",
            peliName: "El Niño y la Garza",
            peliTimes: ["Anime", "APT"]
        },
        {
            url: "https://image.tmdb.org/t/p/original/c2ELoYcSis0HYMyDPGPfk8eVsen.jpg",
            peliHora: "1 hrs 40 min",
            peliName: "Soul",
            peliTimes: ["Animación", "APT"]
        },
        {
            url: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001866?referenceScheme=HeadOffice&allowPlaceHolder=true",
            peliHora: "1 hrs 40 min",
            peliName: "El juego de la Muerte",
            peliTimes: ["Terror", "+14"]
        },
        {
            url: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001897?referenceScheme=HeadOffice&allowPlaceHolder=true",
            peliHora: "1 hrs 40 min",
            peliName: "Jack en la Caja Maldita 3",
            peliTimes: ["Terror", "+14"]
        },
        {
            url: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001881?referenceScheme=HeadOffice&allowPlaceHolder=true",
            peliHora: "1 hrs 50 min",
            peliName: "Alice: La Gemela del Diablo",
            peliTimes: ["Terror", "+14"]
        },
        {
            url: "https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001895?referenceScheme=HeadOffice&allowPlaceHolder=true",
            peliHora: "1 hrs",
            peliName: "Hablando Huevadas: Hijo D...",
            peliTimes: ["Comedia", "+14"]
        }
    ];
    
    const filtrarCartas = (keyword) => {
        const esVacio = (valor) => typeof valor === "string" && valor.length === 0;
        for (let i = 0; i < peliculas.length; i++) {
            const coincide = new RegExp(keyword, 'i').test(peliculas[i]["peliName"]);
            document.getElementById("peli_" + i)
                .setAttribute("style", `display: ${coincide ? "inline-block" : esVacio(keyword) ? "inline-block" : "none"};`);
        }
    };

    const handleInputChange = (evt) => {
        evt.preventDefault();
        setFiltro(evt.target.value);
        filtrarCartas(evt.target.value);
    };

    const [filtro, setFiltro] = useState("");

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Peliculas</h2>
            <FilterAltIcon style={{ marginRight: "0.5em" }} />
            <input
                type="text"
                className="form-control my-3"
                placeholder="Filtrar por nombre"
                id="filtrarInput"
                value={filtro}
                onChange={handleInputChange}
                style={{ display: "inline-block", width: "80%" }}
            />

            <div id="tarjetas" className="row row-cols-1 row-cols-md-3 g-4">
                {peliculas.map((peli, i) => (
                    <div key={i} className="col">
                        <div key={i} className="col">
                            <Pelicula peliName={peli.peliName} peliHora={peli.peliHora} peliTimes={peli.peliTimes} url={peli.url} id={"peli_" + i} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeliculaIndex;
