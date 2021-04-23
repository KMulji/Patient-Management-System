import React, {useContext} from "react"
import {UserContext} from "../../providers/UserProvider";
import {firestore} from "../../firebase";
import {useState} from "react"
import {navigate} from "@reach/router";
import AdminInfoForm from "./AdminInfoForm";
import MedicalForm from "./MedicalForm";
import SubmitForm from "./SubmitForm";

let PatientForm = ()=> {
    const user = useContext(UserContext)

    const [patientDetails,setPatientDetails] = useState({
        firstName:user.patientDetails.firstName,
        lastName:user.patientDetails.lastName,
        DOB:user.patientDetails.DOB,
        nationality:user.patientDetails.nationality,
        occupation:user.patientDetails.occupation,
        phone:user.patientDetails.phone
    })

    const [step,setStep] = useState(0)

    let handleChange = (event) => {
        const {name, value} = event.currentTarget

        if (name === "firstName") {
            setPatientDetails({...patientDetails, firstName: value})
        } else if (name === "lastName") {
            setPatientDetails({...patientDetails, lastName: value})
        } else if (name === "DOB") {
            setPatientDetails({...patientDetails, DOB: value})
        } else if (name === "country") {
            setPatientDetails({...patientDetails, nationality: value})
        } else if (name === "occupation") {
            setPatientDetails({...patientDetails, occupation: value})
        } else if (name === "phone") {
            setPatientDetails({...patientDetails, phone: value})

        }
    }


    let formSubmit = async (event) =>{
        event.preventDefault()
        const userRef =  await firestore.doc(`users/${user.uid}`);

        userRef.update({firstTime: false,patientDetails}).then(()=>{
            navigate("/home")
            window.location.reload()

        } )

    }
    let next = (event) =>{

        event.preventDefault()
        if (step<2){
            setStep(prevState => prevState +1)
        }

    }

    let prev = (event) => {
        console.log(step)
        event.preventDefault()
        if (step>0){
            setStep(prevState=> prevState -1)
        }

    }

    return(

        step === 0?
            <AdminInfoForm patient={patientDetails} handleFormChange={event=>handleChange(event)} move  = {event=>next(event)}/>
            :
            step ===1 ?
            <MedicalForm move = {event=>next(event)} moveBack = {event=>prev(event)}/>
            :
            <SubmitForm submitForm={(event)=>formSubmit(event)}/>
    )
}
export default PatientForm