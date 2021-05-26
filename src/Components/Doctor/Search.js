import React, { useEffect, useState} from "react";

import firebase from "firebase";
import {Container} from "react-bootstrap";
import PreConsultation from "./PreConsultation";
import Consultation from "./Consultation";
import PrevConsultations from "./PrevConsultations";
let Search = ()=>{

    const [patients,setPatients] = useState([])
    const [search,setSearch] = useState({phoneNumber:"",firstName:""})
    const [viewPrecon,setPreCon] = useState(false)
    const [cons,setCons] = useState(false)


    useEffect(()=>{
        const fetchData =async ()=>{
            const db =firebase.firestore()
            const data = await db.collection("/users").get()
            setPatients(data.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        fetchData()
    },[])

    let filteredPatients = patients.filter(patient=>patient.userType === "patient"&& patient.patientDetails && patient.patientDetails.firstName===search.firstName&& patient.patientDetails.phone===search.phoneNumber)

    let handleChange = (event)=>{
        const {name,value} = event.currentTarget

        if (name === "firstName"){
            setSearch({...search,firstName: value.toUpperCase()})
        }else if(name === "phoneNumber"){
            setSearch({...search,phoneNumber: value})
        }
    }
    let go = (event)=>{
        event.preventDefault()
        setPreCon(true)
        setCons(false)

    }
    let con = (event)=>{
        event.preventDefault()
        setCons(true)
        setPreCon(false)

    }

    let disabled = ()=>{
        return search.phoneNumber === "" || search.firstName === "";

    }
    return(

        <Container fluid="md">
            <br/>
            <label>Enter Name</label>
            <input name="firstName" type="text" value={search.firstName} onChange={event => handleChange(event)} />
            <br/>
            <br/>
            <label>Enter Phone Number</label>
            <input name="phoneNumber" type="number" value={search.phoneNumber} onChange={event => handleChange(event)} />
            <br/>

            <button onClick={event => go(event)} disabled={disabled()} >View PreConsultation </button>
            <button onClick={event => con(event)} disabled={disabled()} >Consultation</button>


            {viewPrecon ? (<PreConsultation patient = {filteredPatients}  />) :""}

            {cons ? (<Consultation patient={filteredPatients} setCons={setCons}/>):""}


        </Container>

    )
}
export default Search
