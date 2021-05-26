import React, {useContext, useEffect, useState} from "react"
import {UserContext} from "../../providers/UserProvider"
import {Container, Table} from "react-bootstrap";
import firebase from "firebase";
import PrevConsultations from "../Doctor/PrevConsultations";

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

    let ConsultationObj= consultation.map((item,index)=><PrevConsultations key ={index}  item={item} count={count} setCount={setCount} maxLenght ={consultation.length-1}/>)
    return(
        consultation.length===0?
            <h1>No Consultation Records</h1>
            :
        <Container fluid = "md">
            {ConsultationObj[count]}
        </Container>

    )

}
export default PatientDetails
