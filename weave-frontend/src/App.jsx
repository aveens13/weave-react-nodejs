import "./App.css";
import Landingpage from "./components/landingpage/landingpage";
import React, { useState, useEffect } from "react";
import User from "./components/User/User";
import Load from "./components/Loading";

export const UserContext = React.createContext();
function App() {
  const [state, setState] = useState("load");
  const [userData, setUserData] = useState({});
  //Checks the jwt token stored in the cookies for previous logins to automatically log the user in
  useEffect(() => {
    fetch("/api/v1/user/verifytoken").then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          console.log(result);
          setState("login");
          setUserData(result);
        });
      } else {
        setState("landing");
      }
    });
  }, [state]);

  function handleState(status) {
    setState(status);
    window.location.reload(true);
  }

  if (state == "landing") {
    return <Landingpage state={handleState} />;
  } else if (state == "login") {
    return (
      <UserContext.Provider value={userData}>
        <User />
      </UserContext.Provider>
    );
  } else {
    return <Load />;
  }
}
export default App;
