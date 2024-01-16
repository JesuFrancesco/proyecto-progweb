// Ejemplo de arreglo de películas
const peliculas = [
    {
        nombre: "Pelicula 1",
        imagen: "/159690.jpg",
        horario: "14:00"
    },
    {
        nombre: "Pelicula 2",
        imagen: "/i3ZBZltw103y5hBCyq1yL4sOXRE.jpg",
        horario: "16:00"
    },
    {
        nombre: "Pelicula 3",
        imagen: "/peaky-blinders-2013.jpg",
        horario: "16:00"
    },
    {
        nombre: "Pelicula 4",
        imagen: "ruta-imagen2.jpg",
        horario: "16:00"
    }
    // Añade más películas según sea necesario
];


function mostrarPeliculas() {
    const contenedor = document.getElementById('contenedor-peliculas');
    peliculas.forEach(pelicula => {
        const columna = document.createElement('div');
        columna.className = 'col-md-4'; // Clase de Bootstrap para columnas

        // Crea el HTML para cada película
        columna.innerHTML = `
            <div class="card">
                <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${pelicula.nombre}</h5>
                    <p class="card-text">Horario: ${pelicula.horario}</p>
                </div>
            </div>
        `;

        contenedor.appendChild(columna);
    });
}

// Llamada a la función cuando la página se carga
document.addEventListener('DOMContentLoaded', mostrarPeliculas);
mostrarPeliculas()