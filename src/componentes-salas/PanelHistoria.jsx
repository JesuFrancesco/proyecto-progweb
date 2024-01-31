const PanelHistoria = (props) => {
    return <>
        <div className="card p-4" style={ {backgroundColor: "white", boxShadow: "2px 4px 2px 1px rgba(0, 0, 0, 0.2)"} }>
            <h4 className="card-title" style={{ fontWeight: 600 }}> Historia </h4>
            <p style={{ textAlign: "left" }}>
                {props.texto}
            </p>
        </div>
    </>
}

export default PanelHistoria;