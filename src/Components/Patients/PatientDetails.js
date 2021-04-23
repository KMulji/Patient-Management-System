import React ,{useContext}from "react"
import {UserContext} from "../../providers/UserProvider"
import {Container} from "react-bootstrap";

function PatientDetails (){
    const user = useContext(UserContext)
    const { email,patientDetails} = user;

    return(

        <Container fluid = "md">
            <h1>My Details</h1>
            <h3> Name: {patientDetails.firstName}  {patientDetails.lastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Date Of Birth: {patientDetails.DOB}</h3>
            <h3>Nationality: {patientDetails.nationality}</h3>
            <h3>Phone Number: {patientDetails.phone}</h3>
            <h3>Occupation: {patientDetails.occupation}</h3>
        </Container>

    )

}
export default PatientDetails