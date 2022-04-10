import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

  const { signInWithGoogle } = useFirebase();
  return (
    <div>
      <form>


        <input type="email" name="" id="" placeholder='your email' />
        <br />
        <input type="password" name="" id="" placeholder='enter password' />
        <br />


        <button type="submit">login</button>
        <br />

      </form>
      <button onClick={signInWithGoogle} style={{ marginTop: '20px' }}>sign in through google</button>
    </div>
  );
};

export default Login;