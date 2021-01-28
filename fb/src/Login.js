import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

//
function Login() {
  const [state, dispatch] = useStateValue();
  //
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
    //singinn..
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-1.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
