import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../providers/UserProvider";
import firebase from "firebase";
import PatientForm from "../Patients/PatientForm";
import {Container} from "react-bootstrap";

let PreConsultation = ()=>{


    const user = useContext(UserContext)
    const [step,setStep] = useState(0)
    const [patients,setPatients] = useState([])

    useEffect(()=>{
        const fetchData =async ()=>{
            const db =firebase.firestore()
            const data = await db.collection("/users").get()
            setPatients(data.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        fetchData()
    },[])

    let filteredPatients = patients.filter(patient=>patient.userType === "patient")

    let back = (event)=>{
        if (step>0){
            setStep(prevState => prevState-1)
        }
    }
    let next = (event)=>{
        if (step<filteredPatients.length-1){
            setStep(prevState => prevState+1)
        }
    }
    let PatientsObj = filteredPatients.map((item,index)=><PatientForm key={index} patient={item}/>)

    return(

        <Container fluid="md">
            <h1>Pre Consultation</h1>
            <h2>Search for patient</h2>
            <input type="text" name="nameSearch"/>
            <button className="btn-info">Search</button>
            <br/>
            <br/>
            <h1>Patient Details</h1>
            <br/>
            {PatientsObj[step]}
            <br/>
            <br/>
            <button className="btn-dark" onClick={event => back(event)}>back</button>
            <button  className="btn-dark" onClick={event => next(event)}>next</button>
        </Container>

    )
}
export default PreConsultation