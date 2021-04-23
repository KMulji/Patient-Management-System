import React from "react";
import {auth} from "../firebase";
import {navigate} from "@reach/router";


function EmailVerification(){

    let verifiedHandler = (event)=>{
            window.location.reload()
    }
    return(
        <div>
            <h1>Please verify your email</h1>
            <button onClick={event => verifiedHandler(event)}>I have verified</button>
            <button onClick={() => {
                auth.signOut()
                navigate("/")
            }}>Sign out</button>
        </div>

    )

}
export default EmailVerification