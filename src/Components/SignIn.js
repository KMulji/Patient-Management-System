import React,{useState} from "react"
import  {Link} from "@reach/router"
import {auth} from "../firebase"
const SignIn = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState(null)

    const handleEmailAndPassword = (event,email,password) =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
        });

    }

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;

        if (name === 'userEmail'){
            setEmail(value)
        }
        else if(name === 'userPassword'){
            setPassword(value)
        }
    }
    return(
        <div className="container">
            <h3>Sign In</h3>
            <form >
                {error}
                <br/>
                <div className="form-group">
                    <label>Email</label>
                    <input  className="form-control" type="email" name="userEmail" value={email} onChange={(event)=>onChangeHandler(event)} />
                </div >
                <div className="form-group">
                    <label>Password</label>
                    <input  className="form-control" type="password" name="userPassword" value={password} onChange={(event) => onChangeHandler(event)}/>
                </div>

                <div className="text-center">
                    Don't have an account?{" "}
                    <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                        Sign up here
                    </Link>{" "}
                    <br />{" "}
                    <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
                        Forgot Password?
                    </Link>
                </div>

                <button className="btn btn-primary btn-block" onClick={event => handleEmailAndPassword(event,email,password)}> Sign In</button>
                <Link to="passwordReset">Forgot Password</Link>
            </form>

        </div>
    )
}
export default SignIn;