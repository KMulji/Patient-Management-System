import React,{ useContext } from "react"
import {auth} from "../firebase"
import {UserContext} from "../providers/UserProvider"
import PatientForm from "./PatientForm";
import PatientDetails from "./PatientDetails";
import {navigate, Router} from "@reach/router"
import  {Link} from "@reach/router"


function ProfilePage(){

    const user = useContext(UserContext)
    const {userType,firstTime} = user;

    return(

        userType === "patient"   ?
            firstTime===true ?
                <PatientForm/>
                :
                <div>
                    <Router>
                        <PatientDetails path = "/patientDetails"/>
                        <PatientForm path = "/patientForm"/>
                    </Router>

                    <Link to="/patientDetails">My Details</Link>
                    <Link to="/patientForm">Update Data</Link>
                    <button onClick={() => {
                        auth.signOut()
                        navigate("/")
                    }}>Sign out</button>
                </div>
            :
            <div>
                <h1>Doctor</h1>
                <button onClick={() => {
                    auth.signOut()
                    navigate("/")
                }}>Sign out</button>
            </div>





    )
}
export default ProfilePage