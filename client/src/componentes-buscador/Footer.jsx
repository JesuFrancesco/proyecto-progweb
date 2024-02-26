import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const estilos = {
    position: "fixed",
    left: "0px",
    bottom: "-5px",
    width: "101%",
}

const Footer = () => {
    return <footer style={ estilos }>
        <Box bgcolor={"text.secondary"} sx={{p: "1em"}} className="border d-flex align-items-center justify-content-between">
            <Typography sx={{color: "text.primary", display: "inline", fontWeight: 500}} className='float-left'>
                &copy; ULIMA
            </Typography>
        
            <span className='float-right'>
                <Link to={"https://www.facebook.com/ulima.pe/"}>
                    <FacebookIcon sx={ { color:"text.primary", marginRight: "1em" } } />
                </Link>
                <Link to={"https://twitter.com/udelima"}>
                    <XIcon sx={ { color:"text.primary", marginRight: "1em" } } />
                </Link>
                <Link to={"https://www.youtube.com/user/ulimaoficial/featured"}>
                    <YouTubeIcon sx={ { color:"text.primary", marginRight: "1em" } } />
                </Link>
            </span>
        
        </Box>
    </footer>
}

export default Footer