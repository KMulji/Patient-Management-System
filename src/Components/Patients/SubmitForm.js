import React from "react";
import {Container} from "react-bootstrap";
import {Table} from "react-bootstrap";

let SubmitForm =(props)=>{
    let handleSubmit= (event) =>{
        event.preventDefault()
        props.submitForm(event)
    }
    const medicationObjs =props.medication.map((item,index) =><p key={index}>{item.name}</p> )
    const surgObjs =props.surgery.map((item,index) =><p key={index}>{item.name} {item.date}</p> )
    const allergyObjs =props.allergies.map((item,index) =><p key={index}>{item.name}</p> )
    const chronicObjs =props.chronic.map((item,index) =><p key={index}>{item.name}</p> )
    return(
        <Container fluid="md">
            <br/>
            <Table responsive="md">
                <thead>
                    <h1>Confirm Your Information </h1>
                </thead>

                <tbody>
                <tr>
                    <h2>Names: </h2>
                </tr>
                <tc>
                    <th>First Name: {props.patinet.firstName} </th>
                    <th>Middle Name: {props.patinet.middleName} </th>
                    <th>Last Name: {props.patinet.lastName} </th>
                </tc>
                <tr>
                    <h2>Date Of Birth: </h2>

                </tr>
                <tc>
                    <th>{props.patinet.DOB}</th>
                </tc>
                <tr>
                    <h2>Nationality: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.nationality}</th>
                </tc>
                <tr>
                    <h2>Address: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.address}</th>
                </tc>
                <tr>
                    <h2>Occupation: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.occupation}</th>
                </tc>
                <tr>
                    <h2>Phone Number: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.phone}</th>
                </tc>
                <tr>
                    <h2>Gender: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.gender}</th>
                </tc>
                <tr>
                    <h2>Next of Kin Name: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.nextOfKinName}</th>
                </tc>
                <tr>
                    <h2>Next of Kin Email: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.nextOfKinEmail}</th>
                </tc>
                <tr>
                    <h2>Next of Kin Phone Number: </h2>
                </tr>
                <tc>
                    <th>{props.patinet.nextOfKinPhone}</th>
                </tc>
                <tr>
                    <h2>Current Medication: </h2>
                </tr>
                <tc>
                    <th>{medicationObjs}</th>
                </tc>
                <tr>
                    <h2>Surgeries: </h2>
                </tr>
                <tc>
                    <th>{surgObjs}</th>
                </tc>
                <tr>
                    <h2>Allergies: </h2>
                </tr>
                <tc>
                    <th>{allergyObjs}</th>
                </tc>
                <tr>
                    <h2>Chronic Illnesses: </h2>
                </tr>
                <tc>
                    <th>{chronicObjs}</th>
                </tc>
                </tbody>
            </Table>
            <br/>
            <button className="btn btn-info" onClick={event => props.moveBack(event)}> Back </button>
            <br/>
            <br/>
            <button className="btn badge-success" onClick={(event => handleSubmit(event))}>Submit Form</button>

        </Container>


    )
}
export default SubmitForm
