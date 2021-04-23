import React from "react";


let SubmitForm =(props)=>{
    let handleSubmit= (event) =>{
        event.preventDefault()
        props.submitForm(event)
    }

    return(
        <button onClick={(event => handleSubmit(event))}>Submit Form</button>
    )
}
export default SubmitForm