import React, { Component, createContext } from "react";
import {auth} from "../firebase";
import {generateUserDocument} from "../firebase"
export const UserContext = createContext({ user: null});
export const LoadingContext = createContext({isLoading:true})

class UserProvider extends Component {
    state = {
        user: null,
        isLoading:true,

    };

    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {

            const user = await generateUserDocument(userAuth);
            this.setState({ user:user});
            this.setState({isLoading:false})

        });


    };
    render() {
        return (

            <LoadingContext.Provider value={this.state.isLoading}>
                <UserContext.Provider value={this.state.user} >
                    {this.props.children}
                </UserContext.Provider>
            </LoadingContext.Provider>



        );
    }
}
export default UserProvider;
