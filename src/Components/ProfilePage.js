import React, {useContext, useEffect, useState} from "react"
import {auth} from "../firebase"
import {UserContext} from "../providers/UserProvider"
import PatientForm from "./Patients/PatientForm";
import {navigate} from "@reach/router"
import EmailVerification from "./EmailVerification";
import Navigation from "./Patients/Navigation";
import firebase from "firebase";
import "firebase/auth"
import "firebase/firestore"

import ViewPatientInfo from "./Doctor/ViewPatientInfo";
function ProfilePage(){

    const user = useContext(UserContext)
    const {userType,firstTime} = user;
    const [patients,setPatients] = useState([])
    const [step,setStep] = useState(0)
    useEffect(()=>{

        const fetchData =async ()=>{
            const db =firebase.firestore()
            const data = await db.collection("/users").get()
            setPatients(data.docs.map(doc=>doc.data()))
        }
        fetchData()
    },[])
    let back = (event)=>{
        if (step>0){
            setStep(prevState => prevState-1)
        }
    }
    let next = (event)=>{
        if (step<patients.length-1){
            setStep(prevState => prevState+1)
        }
    }
    const patientObjects = patients.map((patient,index)=><ViewPatientInfo key={index} patient = {patient} long={patients.length}/>)

    console.log(step)
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

                {patientObjects[step]}
                <button onClick={event => back(event)}>back</button>
                <button onClick={event => next(event)}>next</button>
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