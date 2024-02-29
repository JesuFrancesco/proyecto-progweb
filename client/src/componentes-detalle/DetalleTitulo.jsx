import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';

const Pelicula = (props) => {
  return (
    <div className="mt-4 titu">
      <div className="peli">
        <div style={{ fontSize: "40px", fontFamily: "Roboto" }}>{props.titulo}</div>
        <div className="mb-3">
          <div className="ubi">
            <DateRangeIcon />
            <span style={{ marginRight: "1em" }}>&nbsp; {props.year}</span>
            {props.cast.map((person, index) => (
              <span key={index}>
                <PersonIcon /> {person} &nbsp; &nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pelicula
