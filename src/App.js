import "./App.css";
import React from "react";
//import { login } from "./utils/Auth";
import { AuthenticationContext } from "./context/AuthenticationContext";
import AuthComps from "./auth/AuthComps";
import Unauth from "./auth/Unauth";

const App = React.memo(() => {
  //login("divyanshu@strataprop.com", "admin123").then((res) => console.log(res));
  const { user } = React.useContext(AuthenticationContext);

  return user ? <AuthComps /> : <Unauth />;
});

export default App;
