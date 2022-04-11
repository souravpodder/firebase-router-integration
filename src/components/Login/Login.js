import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);


const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
  }

  return (
    <div>
      <form>


        <input type="email" name="" id="" placeholder='your email' />
        <br />
        <input type="password" name="" id="" placeholder='enter password' />
        <br />


        <button type="submit" >login</button>
        <br />

      </form>
      <button style={{ marginTop: '20px' }} onClick={handleGoogleSignIn}>sign in through google</button>
    </div>
  );
};

export default Login;