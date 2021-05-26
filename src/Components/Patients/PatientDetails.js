import React, {useContext, useEffect, useState} from "react"
import {UserContext} from "../../providers/UserProvider"
import {Container, Table} from "react-bootstrap";
import PrevConsultations from "../Doctor/PrevConsultations";
import firebase from "firebase";

function PatientDetails (){
    const user = useContext(UserContext)

    const [consultation,setCons] = useState(      [])
    useEffect(()=>{
        const fetchData = async () => {
                const db = firebase.firestore()
                const data = await db.collection('/users').doc(user.uid).collection('consultations').orderBy("date","asc").get()
                setCons(data.docs.map(doc => ({...doc.data(), id: doc.id})))

        }
        fetchData()
    },[])
    const [count,setCount] = useState(0)

    let consulTationObjs = consultation.map((item,index)=><PrevConsultations key ={index} isPatient={true} item={item} count={count} setCount={setCount} maxLenght ={consultation.length-1}/>)
    return(
        consultation.length===0?
            <h1>No Previous Consultations</h1>
            :
        <Container fluid = "md">
            <br/>

            {consulTationObjs[count]}
        </Container>

    )

}
export default PatientDetails
