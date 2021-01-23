import React, { useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";

function Login() {
  const { login } = useContext(AuthenticationContext);

  return (
    <div>
      <button onClick={() => login("hello", "hi")}>Login</button>
    </div>
  );
}

export default Login;
