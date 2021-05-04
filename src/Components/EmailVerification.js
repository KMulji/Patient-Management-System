import React, {useContext} from "react";
import {auth} from "../firebase";
import {navigate} from "@reach/router";
import {Container} from "react-bootstrap";
import {UserContext} from "../providers/UserProvider";
import getUserDocument from "firebase"

function EmailVerification(){



    let verifiedHandler = (event)=>{
            window.location.reload()
    }
    return(
        <Container fluid="md">

            <h1>Email Verification</h1>
            <br/>
            <p>Please Verify your email</p>
            <button className="btn-success" onClick={event => verifiedHandler(event)}>I have verified</button>
            <br/>
            <br/>
            <button className="btn-info" onClick={ async event  => {
                    await auth.currentUser.sendEmailVerification()
                    event.preventDefault()
                }

            }
            >
                Send Verification Email Again</button>
            <br/>
            <br/>
            <button className="btn-danger" onClick={() => {
                auth.signOut()
                navigate("/")
            }}>Sign out</button>
        </Container>

    )

}
export default EmailVerification