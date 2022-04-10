import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, [])

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  const signOutGoogle = () => {
    signOut(auth).then(() => {
      setUser({});
      console.log(user);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  return { user, signInWithGoogle, signOutGoogle }
}

export default useFirebase;