import React, {useContext} from "react"
import {UserContext} from "../providers/UserProvider";
import {firestore} from "../firebase";
import {useState} from "react"
import {navigate} from "@reach/router";
let PatientForm = ()=> {

    const user = useContext(UserContext)
    const [height,setHeight] = useState("")
    const users = []
    let handleChange = (event) => {
        const {name, value} = event.currentTarget

        if(name === "Height"){
            setHeight(value)
        }
    }

    let formSubmit = async (event) =>{
        event.preventDefault()
        const userRef =  await firestore.doc(`users/${user.uid}`);
        const ref2 = await  firestore.collection('/users').get().then(querySnapshot =>{
            querySnapshot.forEach(doc => {
                users.push({...doc.data()})
            })
        })
        console.log(users)
        userRef.update({firstTime: false,Height:height}).then(()=>{
            navigate("/patientDetails")
            window.location.reload()
        } )



    }

    return(

        <div>

            <form>
                <input type="text" name= "Height" value={height} onChange={(event) => handleChange(event)}/>

                <br/>
                <button onClick={event => formSubmit(event)}>Submit</button>
            </form>
        </div>
    )
}
export default PatientForm