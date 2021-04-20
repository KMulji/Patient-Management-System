import React from "react"
import Application from "./Components/Application"
import UserProvider from "./providers/UserProvider"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <UserProvider>
        <Application/>
    </UserProvider>
  );
}

export default App;
