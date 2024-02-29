import { TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const InputFormulario = (props) => {
    const handleInputChange = (event) => {
        const nuevoObj = props.objeto
        nuevoObj[props.llave] = event.target.value;
        // console.log(nuevoObj)
        props.setFn(nuevoObj);
    }

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

    return <>
        <div className="mb-3">
            <div className="form-label">{props.title}</div>
            <ThemeProvider theme={tema}>
                <TextField type={props.variante}
                    style={ {borderColor: "orange"} }
                    sx={{ '& legend': { display: 'none' }, '& fieldset': { top: 0 },}}  // remover label
                    fullWidth
                    value={props.valor}
                    variant="outlined"
                    onChange={ handleInputChange } />
            </ThemeProvider>
        </div>
        <div className="mb-3" />
    </>
}

export default InputFormulario