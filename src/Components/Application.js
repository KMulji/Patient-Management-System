import React, { useContext }from "react"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"
import ProfilePage from "../Components/ProfilePage"
import PasswordReset from "../Components/PasswordReset"
import { Router } from "@reach/router"
import {UserContext} from "../providers/UserProvider"


function Application(){
    const user = useContext(UserContext)
    return(
        user ?
            <ProfilePage/>
            :
            <Router>
                <SignUp path="signUp" />
                <SignIn path = "/" />
                <PasswordReset path ="passwordReset"/>
            </Router>


    )
}
export default Application