import React, {useEffect, useState} from "react";
import firebase from "firebase";
import AntTable from "./AntTable";
import AutoRefractionTable from "./AutoRefractionTable";

let PrevConsultations = (props)=>{

    console.log(props.item)

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
        <div>

            {props.item.date}
            <h1>Auto Refraction</h1>
            <AutoRefractionTable data={props.item.autoRefraction}/>
            <button onClick={event => back(event)}>Back</button>
            <button onClick={event => next(event)}>Next</button>


        </div>
    )
}
export default PrevConsultations