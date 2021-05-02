import React from "react";

let Medication = (props) =>{

    return(
        <div className=" rounded border border-dark">
            <p>{props.item.name}</p>
            <button className="btn btn-danger btn-sm" onClick={(event) =>props.handleDelete(event,props.id)}>Delete</button>
            <br/>
        </div>
    )



}

export default Medication