import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const estilos = {
    position: "fixed",
    left: "0px",
    bottom: "0px",
    // height: "30px",
    width: "100%",
    background: "#fafafa"
}

const Footer = () => {
    return <footer style={ estilos }>
        <div className="p-3 border d-flex align-items-center justify-content-between">
            <span className='float-left'>
                &copy; ULIMA
            </span>
            
            <span className='float-right'>
                <Link to={"https://www.facebook.com/ulima.pe/"}>
                    <FacebookIcon style={ { marginRight: "1em" } } />
                </Link>
                <Link to={"https://twitter.com/udelima"}>
                    <XIcon style={ { marginRight: "1em" } } />
                </Link>
                <Link to={"https://www.youtube.com/user/ulimaoficial/featured"}>
                    <YouTubeIcon style={ { marginRight: "1em" } } />
                </Link>
            </span>
            
        </div>
    </footer>
}

export default Footer