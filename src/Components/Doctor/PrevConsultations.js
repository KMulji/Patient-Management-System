import React, {useEffect, useState} from "react";
import firebase from "firebase";
import AntTable from "./AntTable";
import AutoRefractionTable from "./AutoRefractionTable";
import OpticalCorrectionTable from "./OpticalCorrectionTable";
import ContactLensTable from "./ContactLensTable";
import ExaminationTable from "./ExaminationTable";
import PostTable from "./PostTable";
import LensFittingTable from "./LensFittingTable";

let PrevConsultations = (props)=>{



    let next = event =>{
        event.preventDefault()
        if (props.count < props.maxLenght){
            props.setCount(prevValue => prevValue+1)
        }
    }

    let back = event =>{
        event.preventDefault()
        if (props.count>0){
            props.setCount(prevValue => prevValue-1)
        }
    }

    return(
        !props.isPatient ?
        <div>
            <br/>

            <button  className="btn btn-info" onClick={event => back(event)}>Back</button>
            <button  className="btn btn-info" onClick={event => next(event)}>Next</button>
            <button  className="btn btn-success" onClick={event => props.prev(false)} >Create new consultaitons</button>
            <br/>
            {props.item.date}
            <h1>Auto Refraction</h1>
            <AutoRefractionTable data={props.item.autoRefraction}/>
            <br/>
            <h1>Optical Correction</h1>
            <OpticalCorrectionTable data = {props.item.opticalCorrection}/>
            <br/>
            <h1>Current Contact Lens</h1>
            <br/>
            <ContactLensTable data={props.item.contactLens} />
            <br/>

            <h1>Examination</h1>
            <br/>
            <ExaminationTable  data={props.item.examination} />
            <br/>

            <h1>Anterior Segment</h1>
            <AntTable data = {props.item.antSeg}/>
            <br/>

            <h1>Posterior Segment</h1>
            <PostTable  data={props.item.postSeg} />
            <br/>

            <br/>
            <h1>Contact Lens Fitting</h1>
            <LensFittingTable data={props.item.lensFittins}/>
            <br/>

            <h1>Conclusion</h1>
            <textarea name="conclusion" value={props.item.conclusion}  />
            <br/>

            <h1>Recommendations</h1>
            <textarea name="observation" value={props.item.observation}/>
            <br/>
            <br/>

        </div>
            :

            <div>
                <button className="btn btn-dark" onClick={event => back(event)}>Back</button>
                <button  className="btn btn-dark" onClick={event => next(event)}>Next</button>
                <br/>
                {props.item.date}
                <br/>
                <h1>Conclusion</h1>
                <textarea name="conclusion" value={props.item.conclusion}  />
                <br/>

                <h1>Recommendations</h1>
                <textarea name="observation" value={props.item.observation}/>
                <br/>
                <br/>
            </div>
    )
}
export default PrevConsultations
