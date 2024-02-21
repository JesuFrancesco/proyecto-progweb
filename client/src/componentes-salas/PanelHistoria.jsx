import Chip from '@mui/material/Chip'
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const PanelHistoria = (props) => {

    const estiloChip = {
        backgroundColor: "rgb(255, 208, 143)",
        display: "inline-flex",
        mr: "1em",
    }

    return <>
        <div className="card p-4" style={ {backgroundColor: "white", boxShadow: "2px 4px 2px 1px rgba(0, 0, 0, 0.2)"} }>
            <h4 className="card-title" style={{ fontWeight: 600 }}> Información </h4>
            <p style={{ textAlign: "justify" }}>
                {props.texto}
            </p>

            <Stack direction="row" spacing={1} sx={{my: 1}}>
                {
                    (props.chips)? props.chips.map(formato =>
                        <Chip variant="outlined" label={formato} sx={estiloChip} />
                    )
                    : <></>
                }
            </Stack>
            
            <Box sx={{my:1}}>
                <PlaceIcon /> {props.location} <br />
                <LocalPhoneIcon /> {props.phone}
            </Box>
        </div>
    </>
}

export default PanelHistoria;