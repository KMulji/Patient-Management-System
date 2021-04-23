import React, {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {auth} from "../../firebase";
import {navigate, Redirect, Router} from "@reach/router";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";
import Home from "./Home";

function Navigation(){
    const [number,setNumber] = useState(0)
    return(
        <Container fluid>

            <Navbar collapseOnSelect  expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Brand >Patient Management System</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">

                            <button
                            className="btn btn-light btn-sm"
                            onClick={()=>{navigate("/home")
                                setNumber(prevState => prevState+1)}}
                        >
                            Home
                        </button>

                        <button
                            className="btn btn-light btn-sm"
                            onClick={()=>{navigate("/patientDetails")
                                setNumber(prevState => prevState+1)}}
                        >
                            My Details
                        </button>
                        <button
                            className="btn btn-light btn-sm"
                            onClick={()=>{navigate("/patientForm")
                                setNumber(prevState => prevState+1)}}
                        >
                            Edit Information
                        </button>

                        <button className="btn btn-danger btn-sm" onClick={() => {
                            auth.signOut()
                            navigate("/")
                        }}>Sign out</button>
                    </Nav>
                        </Navbar.Collapse>
                </Container>


            </Navbar>
            <Router>
                <PatientDetails path = "/patientDetails"/>
                <PatientForm path = "/patientForm"/>
                <Home path ="/home"/>
            </Router>
            {number ===0 ? (<Redirect to="/home" noThrow/>): ""}
        </Container>
    )
}
export default Navigation