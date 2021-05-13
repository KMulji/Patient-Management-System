import React from "react";
import PatientForm from "../Patients/PatientForm";
import {Container} from "react-bootstrap";
import {navigate} from "@reach/router";

let PreConsultation = (props)=>{
    let PatientsObj

    if (props.patient){
        PatientsObj = props.patient.map((item,index)=><PatientForm key={index} patient={item}/>)

    }
    console.log(props.patient)
    return(
                props.patient.length!==0 ?
                    <div>
                        <h1>Pre Consultation</h1>
                        {PatientsObj}
                    </div>
                    :
                    <h1>No data</h1>
    )
}
export default PreConsultation