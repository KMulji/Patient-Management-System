import React, {useContext, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {auth} from "../../firebase";
import {navigate, Redirect, Router} from "@reach/router";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";
import Home from "./Home";
import {UserContext} from "../../providers/UserProvider";
import DoctorsHome from "../Doctor/DoctorsHome";
import Search from "../Doctor/Search";
import PreConsultation from "../Doctor/PreConsultation";
function Navigation(){
    const user = useContext(UserContext)

    const [number,setNumber] = useState(0)
    const [navLinks] = useState(user.userType ==="patient"? {l1:"/home",l2:"/patientDetails",l3:"/patientForm"}: {l1:"/doctorsHome",l2:"/searchForms"})
    const [names] = useState(user.userType ==="patient"? {n1:"Home",n2:"Consultation History", n3:"Edit Information"}:{n1:"home",n2:"Search Forms"})

    let renderButtons =  ()=>{
        return user.userType==="patient" ? "btn btn-light btn-sm" :"invisible btn btn-light btn-sm"
    }

    return(

        <Container fluid>

            <Navbar collapseOnSelect  expand="sm" bg="info" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Brand >Muthaiga Eye Clinic</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">

                            <button
                            className={"btn btn-light btn-sm"}
                            onClick={()=>{navigate(navLinks.l1)
                                setNumber(prevState => prevState+1)}}
                        >
                                {names.n1}
                        </button>

                        <button
                            className={"btn btn-light btn-sm"}
                            onClick={()=>{navigate(navLinks.l2)
                                setNumber(prevState => prevState+1)}}
                        >
                            {names.n2}
                        </button>
                        <button
                            className={renderButtons()}
                            onClick={()=>{navigate(navLinks.l3)
                                setNumber(prevState => prevState+1)}}
                        >
                            {names.n3}
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
                <DoctorsHome path = "/doctorsHome"/>
                <Search path = "/searchForms"/>
                <PreConsultation path="/preConsultation" />

            </Router>
            {number ===0 ? (<Redirect to={navLinks.l1} noThrow/>): ""}
        </Container>
    )
}
export default Navigation
