import React, {useState} from "react";

let Surgery = (props) =>{

    return(
        <div className=" rounded border border-dark">
            <p>surgery:{props.item.name}</p>
            <p>Date:{props.item.date}</p>
            <button className="btn btn-danger btn-sm" onClick={(event) =>props.handleDelete(event,props.id)}>Delete</button>
            <br/>
        </div>
    )



}

export default Surgery