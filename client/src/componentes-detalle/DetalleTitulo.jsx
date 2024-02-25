import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import { Link} from "react-router-dom";

const Pelicula = (props) => {
  return (
    <div className="mt-4 titu">
      <div className="peli">
        <div style={{ fontSize: "40px", fontFamily: "Roboto" }}>{props.titulo}</div>
        <div className="mb-3">
          <div className="ubi">
            <DateRangeIcon />
            <a style={{ marginRight: "1em" }}>&nbsp; {props.year}</a>
            {props.cast.map((person, index) => (
              <a key={index}>
                <PersonIcon /> {person} &nbsp; &nbsp;
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pelicula
