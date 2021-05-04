import React, {useContext, useEffect, useState} from "react"
import {auth} from "../firebase"
import {UserContext} from "../providers/UserProvider"
import PatientForm from "./Patients/PatientForm";
import EmailVerification from "./EmailVerification";
import Navigation from "./Patients/Navigation";
import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

function ProfilePage(){

    const user = useContext(UserContext)
    const {userType,firstTime} = user;


    return(

    auth.currentUser.emailVerified ?

        userType === "patient"   ?
            firstTime===true ?

                <PatientForm />
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