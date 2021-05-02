import React, {useState} from "react";
import {Container} from "react-bootstrap";
import Medication from "./Medication";
import Surgery from "./Surgery";
import Allergy from "./Allergy";
import Chronic from "./Chronic";
let MedicalForm = (props)=>{
    let [meds,setMeds] = useState("")
    let [surg,setSurgery] = useState("")
    let [surgDate,setSurgDate] = useState("")
    let [allerg,setAllerg] = useState("")
    let [chron , setChron] = useState("")

    let handleMove = event =>{
        event.preventDefault()
        props.move(event)
    }
    let handleBack = event =>{
        event.preventDefault()
        props.moveBack(event)
    }
    let handleAddingMeds = (event)=>{
        if (meds!==""){
            props.setMedication(prev => [...prev,{name:meds}])
        }
        event.preventDefault()
    }
    let genericDelete = (event,deleteIndex,arr,setArr) =>{
        const newArr = arr.filter((_,index)=>index!==deleteIndex)
        setArr(newArr)
    }
    let handleDelete = (event,deleteIndex)=>{

        event.preventDefault()
        const newMeds = props.medication.filter((_,index)=>index!==deleteIndex)

        props.setMedication(newMeds)
    }
    let handleSurgDelete = (event,deleteIndex)=>{

        event.preventDefault()
        const newMeds = props.surgery.filter((_,index)=>index!==deleteIndex)

        props.setSurgery(newMeds)
    }
    let handleAllergDelete = (event,deleteIndex)=>{

        event.preventDefault()
        const newMeds = props.allergies.filter((_,index)=>index!==deleteIndex)

        props.setAllergies(newMeds)
    }
    let handleChronDelete = (event,deleteIndex)=>{

        event.preventDefault()
        const newMeds = props.chronic.filter((_,index)=>index!==deleteIndex)

        props.setChronic(newMeds)
    }
    let handleMedsChange =event =>{
        event.preventDefault()
        const {name,value} = event.currentTarget
        if (name==="medicine"){
            setMeds(value)
        }else if (name==="surgery"){
            setSurgery(value)
        }else   if (name==="allergy"){
            setAllerg(value)
        } else if (name==="surgDate"){
            setSurgDate(value)
        }else  if (name==="chronic"){
            setChron(value)
        }
    }
    let handleAddingSurg = (event)=>{
        if (surg!==""){
            props.setSurgery(prev => [...prev,{name:surg, date:surgDate}])

        }

        event.preventDefault()
    }
    let handleAddingAllergy = (event)=>{

        if (allerg!==""){
            props.setAllergies(prev => [...prev,{name:allerg}])

        }

        event.preventDefault()
    }
    let handleAddingChronic = (event)=>{
        if (chron!==""){
            props.setChronic(prev => [...prev,{name:chron}])
        }
        event.preventDefault()
    }

    let medObj = props.medication.map((item,index)=><Medication key ={index} id ={index} item={item}  handleDelete={handleDelete}/>)
    let surgObj=props.surgery.map((item,index)=><Surgery key ={index} id ={index} item={item}  handleDelete={handleSurgDelete}/>)
    let allergObj= props.allergies.map((item,index)=><Allergy key ={index} id ={index} item={item}  handleDelete={handleAllergDelete}/>)
    let chronObj = props.chronic.map((item,index)=><Chronic key={index} id={index} item={item} handleDelete = {handleChronDelete}/>)

    return(
        <Container fluid="md">
            <form>
                <h1>Medical</h1>
                <br/>

                <div className="form-group">
                    <h2>Add any Medication you are currently taking</h2>
                    <br/>
                    <input name="medicine" type="text" onChange={event => handleMedsChange(event)}/>
                    <button className="btn btn-primary" onClick={event => handleAddingMeds(event)}>Add Medicine</button>
                    {medObj}
                </div>

                <br/>
                <div className="form-group">
                    <h2>Add any past surgeries</h2>
                    <br/>
                    <label>Name of surgery</label>

                    <input name="surgery" type="text" onChange={event=>handleMedsChange(event)}/>

                    <label>Date of surgery</label>

                    <input name="surgDate" type="date" onChange={event=>handleMedsChange(event)}/>

                    <button className="btn btn-primary" onClick={event => handleAddingSurg(event)}>Add Surgery</button>
                    {surgObj}
                    <br/>
                </div>

                <div className="form-group">
                    <h2>Add your allergies</h2>
                    <br/>
                    <input name="allergy"onChange={event=>handleMedsChange(event)}/>
                    <button  className="btn btn-primary" onClick={event => handleAddingAllergy(event)}>Add Allergy</button>
                    {allergObj}
                    <br/>
                </div>

                <div className="form-group">
                    <h2>Add Chronic Illnesses</h2>
                    <br/>
                    <input name="chronic" onChange={event=>handleMedsChange(event)}/>
                    <button className="btn btn-primary" onClick={event => handleAddingChronic(event)}>Add Chronic Illness</button>
                    {chronObj}
                    <br/>
                </div>

                <button className="btn btn-dark"  onClick={event =>handleBack(event) }>Back</button>
                <button className="btn btn-dark" onClick={event => handleMove(event)}>Next</button>
            </form>
        </Container>
    )
}
export default MedicalForm