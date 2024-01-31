const PanelHistoria = (props) => {
    return <>
        <div className="card p-4" style={ {backgroundColor: "white"} }>
                        <h4 className="card-title" style={{ fontWeight: 600 }}> Historia </h4>
                        <p style={{ textAlign: "left" }}>
                            {props.texto}
                        </p>
                    </div>
    </>
}

export default PanelHistoria;