import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
const DetalleSinopsis = (props) => {
    return  <div className="col-md">
        <div className="card" style={{ marginLeft: "130px"}}>
            <div className="card-body">
                <Typography variant="h5" className="card-title mb-3" style={{ fontSize: "30px" }}>
                Sinopsis
                </Typography>

                {/* la sinopsis */}
                <Typography variant="body1" className="card-text" style={{ fontSize: "20px", fontFamily: "Roboto", marginBottom: "15px" }}>
                {
                    props.extracto
                }
                </Typography>
                
                {/* los chip */}
                {
                    props.generos.map(tag => <Chip label={tag} />)
                }
            </div>
        </div>
  </div>
}

export default DetalleSinopsis;