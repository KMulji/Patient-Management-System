import React, {useEffect, useState} from "react";
import {firestore} from "../../firebase";

import { Container} from "react-bootstrap";
import ContactLensTable from "./ContactLensTable";
import firebase from "firebase"
import AutoRefractionTable from "./AutoRefractionTable";
import OpticalCorrectionTable from "./OpticalCorrectionTable";
import PrevConsultations from "./PrevConsultations";
import ExaminationTable from "./ExaminationTable";
import AntTable from "./AntTable";
import PostTable from "./PostTable";
import LensFittingTable from "./LensFittingTable";
let Consultation = (props)=>{

    let getDate = ()=>{
        let today = new Date().toLocaleDateString()

        return today
    }
    const [consultation,setCons] = useState(      [])
    useEffect(()=>{
            const fetchData = async () => {
                if (props.patient[0]){
                    const db = firebase.firestore()
                    const data = await db.collection('/users').doc(props.patient[0].id).collection('consultations').orderBy("date","asc").get()
                    setCons(data.docs.map(doc => ({...doc.data(), id: doc.id})))
                }
            }
        fetchData()
    },[])


    const [date,setDate] = useState(getDate)

    const [autoRefraction,setAutoRefraction] = useState({
        reSphere:"",
        reCyl:"",
        reAxis:"",
        leSphere:"",
        leCyl:"",
        leAxis:""
    })
    const [opticalCorrection,setOpticalCorrection] = useState({
        reSphere:"",
        reCyl:"",
        reAxis:"",
        reVa:"",
        leUnaidedVA:"",
        leSphere:"",
        leCyl:"",
        leAxis:"",
        leVa:""

    })
    const [contactLens,setContactLens] = useState({
        reCld:"",
        reVA:"",
        leCld:"",
        leVA:""
    })
    const [hasSpecs,setHasSpecs] = useState(null)

    let handleSpecs = (event)=>{
        const {name,value} = event.currentTarget
        if (name==="hasSpecs"){
            if (value==="true"){
                setHasSpecs(true)
            }else   if (value==="false"){
                setHasSpecs(false)
            }
        }
    }


    let handleChange = (event) =>{
        const {name,value} = event.currentTarget
        setAutoRefraction({...autoRefraction,[name]:value})
    }
    let handleOpticalChange = (event)=>{
        const {name,value} = event.currentTarget

        setOpticalCorrection({...opticalCorrection,[name]:value})
    }
    let handleContactLens = event =>{
        const {name,value} = event.currentTarget
        setContactLens({...contactLens,[name]:value})
    }


    let formSubmit = async (event) =>{
        event.preventDefault()
        const userRef = firestore.doc(`users/${props.patient[0].id}`).collection('consultations').doc();
        const snapshot = await userRef.get();
        if (!snapshot.exists) {
            try {
                await userRef.set({
                    date:date,
                    autoRefraction:autoRefraction,
                    hasSpecs:!hasSpecs,
                    opticalCorrection:opticalCorrection,
                    contactLens:contactLens
                });
            } catch (error) {
                console.error("Error creating user document", error);
            }
        }

        }

    //let consulTationObjs = consultation.map((item,index)=><p key={index}> {item.date} {item.observation} </p>)


    return(
            props.patient.length !==0 ?
                <Container fluid="md">
                    <h1>Consultation</h1>
                    <form>
                        <label>Date</label>
                        <input type ="text" name="date" value={date} disabled={true} />
                        <br/>
                        <h1>Auto-refraction</h1>
                        <AutoRefractionTable handleChange = {handleChange} reSphere={autoRefraction.reSphere} reCyl={autoRefraction.reCyl} reAxis={autoRefraction.reAxis} leSphere={autoRefraction.leSphere} leCyl={autoRefraction.leCyl} leAxis={autoRefraction.leAxis}/>
                        <br/>


                        <h1>Optical Correction</h1>
                        <br/>
                        <OpticalCorrectionTable handleChange = {handleOpticalChange} optical ={opticalCorrection} handleSpecs = {handleSpecs} hasSpecs ={hasSpecs}  />
                        <br/>

                        <h1>Current Contact Lens</h1>
                        <br/>
                        <ContactLensTable handleChange={handleContactLens} />
                        <br/>

                        <h1>Examination</h1>
                        <br/>
                        <ExaminationTable/>
                        <br/>

                        <h1>Anterior Segment</h1>
                        <AntTable/>
                        <br/>

                        <h1>Posterior Segment</h1>
                        <PostTable/>
                        <br/>

                        <h1>Contact Lens Fitting</h1>

                        <br/>
                        <h1>Contact Lens Fitting</h1>
                        <LensFittingTable/>
                        <br/>

                        <h1>Conclusion</h1>
                        <textarea/>
                        <br/>

                        <h1>Recommendations</h1>
                        <textarea/>

                        <br/>
                        {/*<PrevConsultations consultation = {consultation}/>*/}
                        <button onClick={(event)=>formSubmit(event)}>Form Submit</button>
                    </form>
                </Container>
                :
                <h1>No Data</h1>
    )
}
export default Consultation