import React,{ useContext } from "react"
import {auth} from "../firebase"
import {UserContext} from "../providers/UserProvider"
function ProfilePage(){
    const user = useContext(UserContext)

    return(
        <div>
            <h1>Welcome {user.displayName}</h1>
            <h1>Your email is {user.email}</h1>
            <button onClick={()=>auth.signOut()}>Sign Out</button>
        </div>
    )
}
export default ProfilePage