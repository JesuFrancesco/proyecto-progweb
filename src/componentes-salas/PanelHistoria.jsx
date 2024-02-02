import Chip from '@mui/material/Chip'

const PanelHistoria = (props) => {

    const estiloChip = {
        backgroundColor: "rgb(255, 208, 143)",
        textAlign: "center",
        display: "flex",
        marginRight: "1em",
    }

    return <>
        <div className="card p-4" style={ {backgroundColor: "white", boxShadow: "2px 4px 2px 1px rgba(0, 0, 0, 0.2)"} }>
            <h4 className="card-title" style={{ fontWeight: 600 }}> Historia </h4>
            <p style={{ textAlign: "left" }}>
                {props.texto}
            </p>
            {
                (props.chips)? props.chips.map(categoria => <Chip variant="outlined" label={categoria} style={estiloChip} />)
                : <></>
            }
        </div>
    </>
}

export default PanelHistoria;