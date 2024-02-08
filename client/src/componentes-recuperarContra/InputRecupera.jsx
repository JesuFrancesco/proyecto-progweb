import { TextField, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'
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
    })

    const handleInputChange = (event) => {
        const nuevoObj = props.objeto
        nuevoObj[props.llave] = event.target.value;
        console.log(nuevoObj)
        props.setFn(nuevoObj);
    }

    return <>
    <div className="mb-3">
        <div className="form-label">{props.title}</div>
        <ThemeProvider theme={tema}>
            <TextField type={props.variante} 
            fullWidth 
            value={props.valor} 
            variant="outlined" onChange={ handleInputChange } sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 },}} />
        </ThemeProvider>
    </div><div className="mb-3"></div>
    </>
}

export default InputRecupera