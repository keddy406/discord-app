import React from "react";
import "./Login.css";
import { auth, provider } from "../Components/firebase";
import { Button } from "@material-ui/core";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUhlwQeVMkWGS4LqBuriuvnvvDjLEFhoYGeA&usqp=CAU"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
