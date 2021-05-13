import React, {useEffect, useState} from "react";
import firebase from "firebase";

let PrevConsultations = (props)=>{




    const ConsultationOBJs = props.consultation.map((item,index)=><p key={index}> {item.date}     {item.autoRefraction.reCyl}</p>)
    console.log(props.consultation)
    return(
        <div>
            <h1>Prev Consultations</h1>
            {ConsultationOBJs[2]}
        </div>
    )
}
export default PrevConsultations