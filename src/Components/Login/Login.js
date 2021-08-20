import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App.js";
import loginBg from "../../images/footer-bg.jpg";
// import firebase from "firebase/app";
import "firebase/auth";
import {
  handleGoogleSignIn,
  initializeLoginFramework,
} from "./LoginManager.js";

initializeLoginFramework();

const Login = () => {
  // use context api from app.js////////////////////
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // to redirect to destination page after authentication//
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //google sign in handler by import//
  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  // function for handling response //
  const handleResponse = (res, redirect) => {
    setLoggedInUser(res); // from context api//
    // storeAuthToken();
    if (redirect) {
      history.replace(from); // to replace the location after sign in//
    }
  };

  // // //store auth token////
  // const storeAuthToken = () => {
  //   firebase
  //     .auth()
  //     .currentUser.getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       sessionStorage.setItem("token", idToken);
  //       history.replace(from);
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // };
  /////////////////////////////////////////////
  return (
    <div className="bg-green-100 md:flex md:justify-content-between md:items-center">
      <div className="p-8 pt-8 text-center md:mt-0 md:text-left md:w-1/2">
        <h3 className="text-4xl font-extrabold tracking-tight text-gray-700 md:text-5xl">
          Dirty Wash
          <br />
          <span className="block pt-8 text-3xl text-green-600 md:text-4xl">
            Welcome to the Best Laundry Service in Town
          </span>
        </h3>
        <button onClick={googleSignIn} className="mt-8 mb-8 btn-brand md:mb-0">
          Sign in with Google
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          className="object-cover w-full min-h-screen "
          src={loginBg}
          alt="loginBg"
        />
      </div>
    </div>
  );
};

export default Login;
