import React, { useContext }from "react"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp"
import ProfilePage from "../Components/ProfilePage"
import PasswordReset from "../Components/PasswordReset"


import {navigate, Router} from "@reach/router"
import {UserContext,LoadingContext} from "../providers/UserProvider"


function Application(){
    const user = useContext(UserContext)
    const Loading = useContext(LoadingContext)


    return(
     !Loading ?
        user  ?
                <ProfilePage/>
            :
                navigate("/") &&
                <Router>
                    <SignIn path ="/"/>
                    <SignUp path = "signUp"/>
                    <PasswordReset path = "passwordReset"/>
                </Router>

         :
         <h1>Loading...</h1>
    )
}
export default Application