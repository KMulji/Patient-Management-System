import React, {useContext} from "react";
import {Container} from "react-bootstrap";
import {UserContext} from "../../providers/UserProvider";

function DocHome(){
    const user = useContext(UserContext);
    const {userType,firstTime} = user;

    return(
        <Container fluid="md">
            <h1>Welcome to Patient Management System, {user.displayName} </h1>
        </Container>

    )
}
export default DocHome