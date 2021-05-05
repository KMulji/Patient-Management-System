import React, {useContext} from "react"
import {auth} from "../firebase"
import {UserContext} from "../providers/UserProvider"
import PatientForm from "./Patients/PatientForm";
import EmailVerification from "./EmailVerification";
import Navigation from "./Patients/Navigation";

import "firebase/auth"
import "firebase/firestore"
import {navigate} from "@reach/router";


function ProfilePage(){

    const user = useContext(UserContext)
    const {userType,firstTime} = user;


    return(

    auth.currentUser.emailVerified ?

        userType === "patient"   ?
            firstTime===true ?
                <div>
                    <button className="btn btn-danger btn-sm" onClick={() => {
                        auth.signOut()
                        navigate("/")
                    }}>Sign out</button>
                    <PatientForm />
                </div>

                :
                <Navigation/>
            :
            <div>
                <Navigation/>
            </div>
        :
        <EmailVerification/>
    )
}
export default ProfilePage