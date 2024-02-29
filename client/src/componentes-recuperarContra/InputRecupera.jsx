import { TextField, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
import React, { useState } from 'react';
const InputRecupera = (props) => {
    const tema = createTheme({
        palette: {
            primary: {
                main: '#FF5733',
            },
            secondary: {
                main: '#fafafa',
            },
        },
    });

    // Asignamos un valor predeterminado si props.objeto[props.llave] es undefined
    const [valor, setValor] = useState(props.objeto[props.llave] || '');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setValor(value);
        const nuevoObj = { ...props.objeto };
        nuevoObj[props.llave] = value;
        props.setFn(nuevoObj);
    };

    return (
        <div className="mb-3">
            <div className="form-label">{props.title}</div>
            <ThemeProvider theme={tema}>
                <TextField
                    type={props.variante}
                    fullWidth
                    value={valor}
                    variant="outlined"
                    onChange={handleInputChange}
                    disabled={props.disabled}
                    sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 } }}
                />
            </ThemeProvider>
        </div>
    );
}

export default InputRecupera;
