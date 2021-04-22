import React,{useState} from "react"
import {auth} from  "../firebase"
import {Link} from "@reach/router";
let PasswordReset = ()=>{
    const[email,setEmail] = useState('')
    const [emailBeenSent,setEmailBeenSent]= useState(false)
    const [error,setError] = useState(null)
    let handleOnChange = (event) =>{
        const {name, value} = event.currentTarget

        if(name === 'userEmail'){
            setEmail(value)
        }

    }
    const sendResetEmail = event => {
        event.preventDefault()
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmailBeenSent(true)
                //setTimeout(()=>{setEmailBeenSent(false)},3000)
            })
            .catch(()=>{
                setError("Error resetting password")
                console.log(error)
            })
    }
    const handleResend = (event)=>{
        sendResetEmail(event)
        alert("Link resent")
    }
    return(
        emailBeenSent?
            <div>
                <Link to="/">Back to sign in</Link>
                <button onClick={(event)=>handleResend(event)}>Resend Link ?</button>
            </div>

            :
        <div>
            <form>
                <input type="email" name="userEmail" value={email} onChange={(event)=>handleOnChange(event)} />
                <button onClick={sendResetEmail}>Send Link</button>
                <Link to="/">Back to sign in</Link>
            </form>
        </div>
    )
    
}
export default PasswordReset