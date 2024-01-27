import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Detalle from "./Detalle";
import ubi from "./ubicacion.png";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

const DetalleIndex = () => {
  const location = useLocation();
  const [filtro] = useState("");
  const [titulo, setTitulo] = useState("");
  const [hora, setHora] = useState("");
  const [director, setDirector] = useState("");
  const [trailer, setTrailer] = useState("");
  const [etiqueta1, setEtiqueta1] = useState("");
  const [etiqueta2, setEtiqueta2] = useState("");
  const peliculas = [
    {peliHora: "1 hrs 50 min", peliName: "Beekeper Sentencia de Muerte", peliEtiqueta: ["Acción", "+14"], trailer: "https://www.youtube.com/embed/J2pWkhP3ou0", director: "David Ayer"},
    { peliHora: "1 hrs 20 min", peliName: "La super Familia", peliEtiqueta: ["Familiar", "APT"], trailer: "https://www.youtube.com/embed/6GJYfU1dt5w", director: "Rasmus A. Sivertsen"},
    { peliHora: "2 hrs 10 min", peliName: "Aquaman y el Reino Perdido", peliEtiqueta: ["Acción", "+14"], trailer: "https://www.youtube.com/embed/M8W_y0mmJEc", director: "James Wan"},
    { peliHora: "2 hrs 10 min", peliName: "El Niño y la Garza", peliEtiqueta: ["Anime", "APT"], trailer: "https://www.youtube.com/embed/PW7vSgGGElA", director: "Hayao Miyazaki"},
    { peliHora: "1 hrs 40 min", peliName: "Soul", peliEtiqueta: ["Animación", "APT"], trailer: "https://www.youtube.com/embed/3QIdlo4uIVg", director: "Pete Docter"},
    { peliHora: "1 hrs 40 min", peliName: "El juego de la Muerte", peliEtiqueta: ["Terror", "+14"], trailer: "https://www.youtube.com/embed/6t_jjM1aHOE", director: "Anna Zaytseva"},
    { peliHora: "1 hrs 40 min", peliName: "Jack en la Caja Maldita 3", peliEtiqueta: ["Terror", "+14"], trailer: "https://www.youtube.com/embed/0Xp2_FoXjQ8", director: "Lawrence Fowler"},
    { peliHora: "1 hrs 50 min", peliName: "Alice: La Gemela del Diablo", peliEtiqueta: ["Terror", "+14"], trailer: "https://www.youtube.com/embed/ObSYc9_o6Uo", director: "William Mark McCullough"},
    { peliHora: "1 hrs", peliName: "Hablando Huevadas: Hijo D...", peliEtiqueta: ["Comedia", "+14"], trailer: "https://www.youtube.com/embed/7pZGLnGJAJs", director: "Chino Pinto"}
];

const Salas_dispo = [
  {abrevia: "S1",sala: "Sala A",descripcion:  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at itslayout",horarios: ["15:00", "17:00"]},
  {abrevia: "S2",sala: "Sala B",descripcion:  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at itslayout",horarios: ["16:00", "18:00"]},
  {abrevia: "S3",sala: "Sala C",descripcion:  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at itslayout",horarios: ["20:00", "22:00"]},
];

  useEffect(() => {
    const rutaActual = location.pathname;

    for (let i = 0; i < peliculas.length; i++) {
      if (rutaActual.includes(`/peli_${i}`)) {
        setTitulo(peliculas[i].peliName);
        setHora(peliculas[i].peliHora);
        setEtiqueta1(peliculas[i].peliEtiqueta[0]);
        setEtiqueta2(peliculas[i].peliEtiqueta[1]);
        setTrailer(peliculas[i].trailer);
        setDirector(peliculas[i].director)
        break;
      }
    }
  }, [location.pathname, peliculas]);


  const salasFiltradas = Salas_dispo.filter((sala) =>
    sala.sala.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="row contenido">
      <div style={{ borderBottom: "solid 2px rgb(196, 196, 196)", width: "960px" }}>
        <Typography variant="h1" className="mt-3" style={{ fontFamily: "Roboto", fontSize: "34px" }}>
            Película
        </Typography>
      </div>
      <div className="mt-4 titu">
        <div style={{ fontSize: "34px", fontFamily: "Roboto" }}>{titulo}</div>
        <div className="mb-3">
          <div className="ubi">
            <img src={ubi} alt="ubicacion" />
            &nbsp;
            <a>{hora}</a>
            &nbsp;&nbsp;
            <img src={ubi} alt="ubicacion" />
            &nbsp;
            <a>{director}</a>
          </div>
        </div>
      </div>
      <div className="col sinopsis" style={{ paddingLeft: "30px" }}>
        <div className="card" style={{ width: "546px", height: "286px" }}>
          <iframe height="286" src={trailer} allowFullScreen />
        </div>
      </div>
      <div className="col">
        <div className="card" style={{ width: "290px", height: "284px" }}>
          <div className="card-body">
            <Typography variant="h5" className="card-title mb-3" style={{ fontSize: "24px" }}>
              Sinopsis
            </Typography>
            <Typography variant="body1" className="card-text" style={{ fontSize: "16px", fontFamily: "Roboto", marginBottom: "15px" }}>
              La brutal campaña de venganza de un hombre adquiere dimensiones nacionales cuando se descubre que es un antiguo agente de una poderosa organización clandestina conocida como "Los apicultores"
            </Typography>
            <Chip label={etiqueta1}/>
            &nbsp;
            <Chip label={etiqueta2}/>
          </div>
        </div>
      </div>
      <p></p>
      <div style={{ paddingLeft: "30px" }}>
        <Typography variant="h2" style={{ fontSize: "34px", fontFamily: "Roboto" }}>
          Salas disponibles
        </Typography>
      </div>
      <div className="col-6">
        {salasFiltradas.map((detalle, i) => (
          <Detalle key={i} abrevia={detalle.abrevia} sala={detalle.sala} descripcion={detalle.descripcion} horarios={detalle.horarios} />
        ))}
      </div>
    </div>
  );
};

export default DetalleIndex;
