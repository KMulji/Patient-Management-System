import React, { useState } from "react";
import {Link} from "@reach/router";
import {auth, generateUserDocument} from "../firebase"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [userType,setUserType] = useState("")
    const [firstTime] = useState(true)
    const [consultation] = useState([])
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await generateUserDocument(user, {displayName, userType, firstTime,consultation});
            await user.sendEmailVerification()


        }
        catch(error){
            setError('Error Signing up with email and password');
        }
        event.preventDefault();

        setEmail("");
        setPassword("");
        setDisplayName("");


    };
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setUserType("patient")
            setEmail(value);

        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };
    return (

        <div className="mt-8">
            <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
            <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
                {error !== null && (
                    <div className=" text-center">
                        {error}
                    </div>
                )}
                <form className="text-center">
                    <label htmlFor="displayName" className="block">
                        Display Name:
                    </label>
                    <input id="displayName" type="text" className=""
                           name="displayName" value={displayName} placeholder="E.g: Hung"
                           onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block">
                        Email:
                    </label>
                    <input id="userEmail" type="email" className=""
                           name="userEmail" value={email} placeholder="E.g: hemsworth@gmail.com"
                           onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
                    </label>
                    <input id="userPassword" type="password" className=""
                        name="userPassword" value={password} placeholder="Your Password"
                        onChange={event => onChangeHandler(event)}
                    />
                    <button
                        className="bg-blue-400 hover:bg-blue-500 w-full py-2"
                        onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign up
                    </button>
                </form>
                <p className="text-center my-3">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-500 hover:text-blue-600">
                        Sign in here
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignUp;