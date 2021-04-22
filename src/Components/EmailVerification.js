import React from "react";


function EmailVerification(){

    let verifiedHandler = (event)=>{
            window.location.reload()
    }
    return(
        <div>
            <h1>Please verify your email</h1>
            <button onClick={event => verifiedHandler(event)}>I have verified</button>
        </div>

    )

}
export default EmailVerification