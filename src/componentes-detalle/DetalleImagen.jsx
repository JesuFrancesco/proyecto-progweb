const Imagen = (props) => {
    return  <div className="trailer">
    <img src={props.url} alt="" 
    className='w-100' style={ {height: "500px", overflow: "hidden", objectFit: "contain"} }/>
  </div> 
}

export default Imagen