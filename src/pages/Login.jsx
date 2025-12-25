import React, { useRef, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const usernameRef = useRef(null);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <input ref={usernameRef} placeholder="username" />
      <button onClick={login}>Log In</button>
    </div>
  );
}
