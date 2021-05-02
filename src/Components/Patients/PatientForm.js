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

        firstName: user.patientDetails ? user.patientDetails.firstName:"",
        middleName: user.patientDetails ? user.patientDetails.middleName:"",
        lastName: user.patientDetails ? user.patientDetails.lastName:"",
        DOB: user.patientDetails ? user.patientDetails.DOB:"",
        nationality: user.patientDetails ? user.patientDetails.nationality:"",
        occupation: user.patientDetails ? user.patientDetails.occupation:"",
        phone: user.patientDetails ? user.patientDetails.phone:"",
        gender: user.patientDetails ? user.patientDetails.gender:"",
        address:user.patientDetails?user.patientDetails.address:"",
        nextOfKinName:user.patientDetails?user.patientDetails.nextOfKinName:"",
        nextOfKinPhone:user.patientDetails?user.patientDetails.nextOfKinPhone:"",
        nextOfKinEmail:user.patientDetails?user.patientDetails.nextOfKinEmail:"",
    })
    const[medication,setMedication] = useState(user.medication ? user.medication:[])

    const[surgery,setSurgery] = useState(user.surgery? user.surgery : [])

    const[allergies,setAllergies] = useState(user.allergies? user.allergies:[])

    const [chronic,setChronic ] = useState(user.chronic ? user.chronic:[])


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
        } else if (name === "gender") {
            setPatientDetails({...patientDetails, gender: value})
        } else if (name === "middleName") {
            setPatientDetails({...patientDetails, middleName: value})
        }else if (name==="address"){
            setPatientDetails({...patientDetails,address: value})
        }else  if (name === "nextOfKinName"){
            setPatientDetails({...patientDetails,nextOfKinName: value})
        }else if (name === "nextOfKinEmail"){
            setPatientDetails({...patientDetails,nextOfKinEmail: value})
        }else if (name === "nextOfKinPhone"){
            setPatientDetails({...patientDetails,nextOfKinPhone: value})
        }
    }


    let formSubmit = async (event) =>{
        event.preventDefault()
        const userRef =  await firestore.doc(`users/${user.uid}`);

        userRef.update({firstTime: false,patientDetails,medication,surgery,allergies,chronic}).then(()=>{
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

        step === 0 ?
            <AdminInfoForm patient={patientDetails}  handleFormChange={event=>handleChange(event)} move  = {event=>next(event)}/>
            :
            step ===1 ?
            <MedicalForm  handleChage = {

                event=>handleChange(event)}
                          medication = {medication}
                          setMedication={setMedication}
                          surgery={surgery}
                          setSurgery={setSurgery}
                          allergies={allergies}
                          setAllergies={setAllergies}
                          chronic ={chronic}
                          setChronic = {setChronic}
                          move = {event=>next(event)}
                          moveBack = {event=>prev(event)}

            />
            :
            <SubmitForm
                moveBack={event=>prev(event)}
                submitForm={(event)=>formSubmit(event)}
                patinet={patientDetails}
                medication={medication}
                allergies={allergies}
                chronic={chronic}
                surgery={surgery}
            />
    )
}
export default PatientForm