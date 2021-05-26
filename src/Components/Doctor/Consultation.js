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

    console.log(consultation)
    const [date] = useState(getDate)

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
        reUnaidedVa:"",
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

    const [examination,setExamination] = useState({
        reSphere:"",
        reCyl:"",
        reAxis:"",
        reCdVa:"",
        leSphere:"",
        leCyl:"",
        leAxis:"",
        leCdVa:"",
        DCoverTest:"",
        NCoverTest:"",
        NPOC:"",
        Motility:"",
        CVT:"",
        stereoTest:""
    })
    const [antSeg,setAntSeg] = useState({
        reLids:"",
        leLids:"",
        reCornea:"",
        leCornea:"",
        reCon:"",
        leCon:"",
        reTears:"",
        leTears:"",
        reTon:"",
        leTon:""
    })
    const [postSeg,setPostSeg] = useState({
        reMedia:"",
        leMedia:"",
        reDisc:"",
        leDisc:"",
        reCD:"",
        leCD:"",
        reVessels:"",
        leVessels:"",
        reBackground:"",
        leBackground:"",
        reMacula:"",
        leMacula:""
    })
    const [lensFittins,setLesnFitting] = useState({
        reDesign:"",
        reBase:"",
        rePower:"",
        reDiameter:"",
        reBCVA:"",
        leDesign:"",
        leBase:"",
        lePower:"",
        leDiameter:"",
        leBCVA:""
    })
    let [conclusion,setConclusion] = useState("")
    let [observation,setObservation] = useState("")

    const [prevCon,setPrevCon] = useState(false)

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
    let handleExamination = event => {
        const {name,value} = event.currentTarget
        setExamination({...examination,[name]:value})
    }
    let handlePostSegment = event => {
        const {name,value} = event.currentTarget
        setPostSeg({...postSeg,[name]:value})
    }
    let handleAntSeg = event => {
        const {name,value} = event.currentTarget
        setAntSeg({...antSeg,[name]:value})
    }
    let handleLensFitting = event => {
        const {name,value} = event.currentTarget
        setLesnFitting({...lensFittins,[name]:value})
    }
    let handleConclusionObservation = event =>{
        const {name,value} = event.currentTarget
        if (name==="conclusion"){
            setConclusion(value)
        }else if (name==="observation"){
            setObservation(value)
        }
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
                    contactLens:contactLens,
                    examination:examination,
                    antSeg:antSeg,
                    postSeg:postSeg,
                    lensFittins:lensFittins,
                    observation:observation,
                    conclusion:conclusion
                });

            } catch (error) {
                console.error("Error creating user document", error);
            }
        }
            props.setCons(false);
            props.setCons(true);
            alert("Form Submitted")
        }
    let prev = (event)=>{
        event.preventDefault()
        setPrevCon(true)
    }
    const [count,setCount] = useState(0)

    let consulTationObjs = consultation.map((item,index)=><PrevConsultations key ={index} prev={setPrevCon} item={item} count={count} setCount={setCount} maxLenght ={consultation.length-1}/>)

    return(
            props.patient.length !==0 ?

                prevCon ?
                    consulTationObjs[count]
                    :
                <Container fluid="md">
                    <h1>Consultation</h1>
                    <button onClick={event => prev(event)} disabled={consultation.length===0} >View Previous Consultations</button>
                    <form>
                        <label>Date</label>
                        <input type ="text" name="date" value={date} disabled={true} />
                        <br/>
                        <h1>Auto-refraction</h1>
                        <AutoRefractionTable handleChange = {handleChange}  autoRefraction={autoRefraction} />
                        <br/>


                        <h1>Optical Correction</h1>
                        <br/>
                        <OpticalCorrectionTable handleChange = {handleOpticalChange} optical ={opticalCorrection} handleSpecs = {handleSpecs} hasSpecs ={hasSpecs}  />
                        <br/>

                        <h1>Current Contact Lens</h1>
                        <br/>
                        <ContactLensTable currentContactLens={contactLens} handleChange={handleContactLens} />
                        <br/>

                        <h1>Examination</h1>
                        <br/>
                        <ExaminationTable  examination={examination}  handleChange = {handleExamination}/>
                        <br/>

                        <h1>Anterior Segment</h1>
                        <AntTable handleChange = {handleAntSeg} real = {antSeg}/>
                        <br/>

                        <h1>Posterior Segment</h1>
                        <PostTable handleChange ={handlePostSegment} post={postSeg} />
                        <br/>

                        <h1>Contact Lens Fitting</h1>

                        <br/>
                        <h1>Contact Lens Fitting</h1>
                        <LensFittingTable lensFitting={lensFittins}  handleChange = {handleLensFitting}/>
                        <br/>

                        <h1>Conclusion</h1>
                        <textarea name="conclusion" value={conclusion} onChange={event => handleConclusionObservation(event)} />
                        <br/>

                        <h1>Recommendations</h1>
                        <textarea name="observation" value={observation}  onChange={event => handleConclusionObservation(event)} />

                        <br/>
                        <button onClick={(event)=>formSubmit(event)}>Form Submit</button>
                    </form>
                </Container>
                :
                <h1>No Data</h1>
    )
}
export default Consultation
