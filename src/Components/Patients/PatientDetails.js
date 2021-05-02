import React ,{useContext}from "react"
import {UserContext} from "../../providers/UserProvider"
import {Container, Table} from "react-bootstrap";

function PatientDetails (){
    const user = useContext(UserContext)
    const { email,patientDetails} = user;

    const medicationObjs =user.medication.map((item,index) =><p key={index}>{item.name}</p> )
    const surgObjs =user.surgery.map((item,index) =><p key={index}>{item.name} {item.date}</p> )
    const allergyObjs =user.allergies.map((item,index) =><p key={index}>{item.name}</p> )
    const chronicObjs =user.chronic.map((item,index) =><p key={index}>{item.name}</p> )
    return(

        <Container fluid = "md">
            <br/>
            <Table responsive="md">
                <thead>
                <h1>Your Information</h1>
                </thead>

                <tbody>
                <tr>
                    <h2>Names: </h2>
                </tr>
                <tc>
                    <th>First Name: {user.patientDetails.firstName} </th>
                    <th>Middle Name: {user.patientDetails.middleName} </th>
                    <th>Last Name: {user.patientDetails.lastName} </th>
                </tc>
                <tr>
                    <h2>Date Of Birth: </h2>

                </tr>
                <tc>
                    <th>{user.patientDetails.DOB}</th>
                </tc>
                <tr>
                    <h2>Nationality: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.nationality}</th>
                </tc>
                <tr>
                    <h2>Address: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.address}</th>
                </tc>
                <tr>
                    <h2>Occupation: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.occupation}</th>
                </tc>
                <tr>
                    <h2>Phone Number: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.phone}</th>
                </tc>
                <tr>
                    <h2>Gender: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.gender}</th>
                </tc>
                <tr>
                    <h2>Next of Kin Name: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.nextOfKinName}</th>
                </tc>
                <tr>
                    <h2>Next of Kin Email: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.nextOfKinEmail}</th>
                </tc>
                <tr>
                    <h2>Next of Kin Phone Number: </h2>
                </tr>
                <tc>
                    <th>{user.patientDetails.nextOfKinPhone}</th>
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
        </Container>

    )

}
export default PatientDetails