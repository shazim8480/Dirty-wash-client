import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
  // condition for not appearing "firebase default" prompt every time//
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

//google sign in method //
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return (
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isLoggedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          success: true,
        };
        return signedInUser;

        //   console.log(displayName, email, photoURL);
      })
      //handle error//
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      })
  );
};

// google sign out ///
export const handleGoogleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
        success: false,
      };
      return signedOutUser;
      // console.log("sign out successful");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
