import React, {useContext} from "react"
import {UserContext} from "../../providers/UserProvider";
import {firestore} from "../../firebase";
import {useState} from "react"
import {navigate} from "@reach/router";
import AdminInfoForm from "./AdminInfoForm";
import MedicalForm from "./MedicalForm";
import SubmitForm from "./SubmitForm";


let PatientForm = (props)=> {
    const user = useContext(UserContext)

    const [patientDetails,setPatientDetails] = useState({
        firstName: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.firstName : user.patientDetails ? user.patientDetails.firstName :"",
        middleName:  user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.middleName : user.patientDetails ? user.patientDetails.middleName :"",
        lastName: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.lastName : user.patientDetails ? user.patientDetails.lastName :"",
        DOB: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.DOB : user.patientDetails ? user.patientDetails.DOB :"",
        nationality: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.nationality : user.patientDetails ? user.patientDetails.nationality :"",
        occupation: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.occupation : user.patientDetails ? user.patientDetails.occupation :"",
        phone: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.phone : user.patientDetails ? user.patientDetails.phone :"",
        gender: user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.gender : user.patientDetails ? user.patientDetails.gender :"",
        address:user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.address : user.patientDetails ? user.patientDetails.address :"",
        nextOfKinName:user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.nextOfKinName : user.patientDetails ? user.patientDetails.nextOfKinName :"",
        nextOfKinPhone:user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.nextOfKinPhone : user.patientDetails ? user.patientDetails.nextOfKinPhone :"",
        nextOfKinEmail:user.userType==="doctor"? props.patient.patientDetails && props.patient.patientDetails.nextOfKinEmail : user.patientDetails ? user.patientDetails.nextOfKinEmail :"",

    })
    const[medication,setMedication] = useState( user.userType==="doctor"? props.patient.medication :  user.medication ? user.medication:[])

    const[surgery,setSurgery] = useState(user.userType==="doctor" ? props.patient.surgery: user.surgery? user.surgery : [])

    const[allergies,setAllergies] = useState( user.userType==="doctor"? props.patient.allergies :user.allergies? user.allergies:[])

    const [chronic,setChronic ] = useState(   user.userType==="doctor"  ? props.patient.chronic: user.chronic ? user.chronic:[])


    const [step,setStep] = useState(0)

    let handleChange = (event) => {
        const {name, value} = event.currentTarget

            let upperCaseValue = value.toUpperCase()
        if (name === "firstName") {
            setPatientDetails({...patientDetails, firstName: upperCaseValue})
        } else if (name === "lastName") {
            setPatientDetails({...patientDetails, lastName: upperCaseValue})
        } else if (name === "DOB") {
            setPatientDetails({...patientDetails, DOB: upperCaseValue})
        } else if (name === "country") {
            setPatientDetails({...patientDetails, nationality: value})
        } else if (name === "occupation") {
            setPatientDetails({...patientDetails, occupation: upperCaseValue})
        } else if (name === "phone") {
            setPatientDetails({...patientDetails, phone: upperCaseValue})
        } else if (name === "gender") {
            setPatientDetails({...patientDetails, gender: upperCaseValue})
        } else if (name === "middleName") {
            setPatientDetails({...patientDetails, middleName: upperCaseValue})
        }else if (name==="address"){
            setPatientDetails({...patientDetails,address: upperCaseValue})
        }else  if (name === "nextOfKinName"){
            setPatientDetails({...patientDetails,nextOfKinName: upperCaseValue})
        }else if (name === "nextOfKinEmail"){
            setPatientDetails({...patientDetails,nextOfKinEmail: value})
        }else if (name === "nextOfKinPhone"){
            setPatientDetails({...patientDetails,nextOfKinPhone: upperCaseValue})
        }
    }


    let formSubmit = async (event) =>{
        if (user.userType === "patient"){
            const userRef =  await firestore.doc(`users/${user.uid}`);

            userRef.update({firstTime: false,patientDetails,medication,surgery,allergies,chronic}).then(()=>{
                navigate("/home")
                window.location.reload()

            } )
        }else {
            const userRef =  await firestore.doc(`users/${props.patient.id}`);

            userRef.update({firstTime: false,patientDetails,medication,surgery,allergies,chronic}).then(()=>{
                navigate("/home")
                window.location.reload()

            } )
        }
        event.preventDefault()


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