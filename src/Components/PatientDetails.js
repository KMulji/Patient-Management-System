import React ,{useContext}from "react"
import {UserContext} from "../providers/UserProvider"

function PatientDetails (){
    const user = useContext(UserContext)
    const {displayName, email,Height} = user;

    return(

        <div>

            <h1>{displayName}</h1>
            <h1>{email}</h1>
            <h1>{Height}</h1>

        </div>

    )

}
export default PatientDetails