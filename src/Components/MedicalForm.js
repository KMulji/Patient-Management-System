import React from "react";

let MedicalForm = (props)=>{

    let handleMove = event =>{
        event.preventDefault()
        props.move(event)
    }
    let handleBack = event =>{
        event.preventDefault()
        props.moveBack(event)
    }
    return(
        <form>
            <h1>Medical</h1>
            <button onClick={event => handleMove(event)}>Next</button>
            <button onClick={event =>handleBack(event) }>Back</button>
        </form>

    )
}
export default MedicalForm