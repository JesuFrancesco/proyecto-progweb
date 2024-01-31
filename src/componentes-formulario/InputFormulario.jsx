import { TextField } from '@mui/material'

const InputFormulario = (props) => {
    const handleInputChange = (event) => {
        const nuevoObj = props.objeto
        nuevoObj[props.llave] = event.target.value;
        console.log(nuevoObj)
        props.setFn(nuevoObj);
    }

    return <>
        <div className="mb-3">
            <div className="form-label">{props.title}</div>
            <TextField type={props.variante} fullWidth label={props.title} value={props.valor} variant="standard" onChange={ handleInputChange } />
        </div>
        <div className="mb-3" />
    </>
}

export default InputFormulario