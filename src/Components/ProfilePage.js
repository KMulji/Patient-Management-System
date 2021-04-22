import React,{ useContext } from "react"
import {auth} from "../firebase"
import {UserContext} from "../providers/UserProvider"
import PatientForm from "./PatientForm";
import {navigate, Router} from "@reach/router"
import EmailVerification from "./EmailVerification";
import Navigation from "./Navigation";

function ProfilePage(){

    const user = useContext(UserContext)
    const {userType,firstTime} = user;


    return(
    auth.currentUser.emailVerified ?

        userType === "patient"   ?
            firstTime===true ?
                <PatientForm/>
                :
                <Navigation/>
            :
            <div>
                <h1>Doctor</h1>
                <button onClick={() => {
                    auth.signOut()
                    navigate("/")
                }}>Sign out</button>
            </div>
        :
        <EmailVerification/>
    )
}
export default ProfilePage