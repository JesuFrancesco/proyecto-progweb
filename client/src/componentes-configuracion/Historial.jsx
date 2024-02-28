import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

const Historial = () => {
    const [dataReserva, SetdataReserva] = useState([])

    const usu = sessionStorage.getItem("usuario_objeto")
    const usuario = (usu)? JSON.parse(usu) : {};
    console.log(usuario.codigo)

    useEffect(() => {
        const obtenerReservas = async () => {
            const response = await fetch(`https://pweb2024-api.azurewebsites.net/api/historial?usuario_id=${usuario.codigo}`);
            const json = await response.json();
            SetdataReserva(json);
        };
        obtenerReservas();
      }, []);

    return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pelicula</TableCell>
                            <TableCell>Sala</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Hora</TableCell>
                            <TableCell>Cantidad de entradas</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataReserva.map(reserva => (
                            <TableRow key={reserva.id}>
                                <TableCell>{reserva.funcion}</TableCell>
                                <TableCell>{reserva.sala}</TableCell>
                                <TableCell>{reserva.fecha}</TableCell>
                                <TableCell>{reserva.hora}</TableCell>
                                <TableCell>{reserva.entradas}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
      );
}

export default Historial
