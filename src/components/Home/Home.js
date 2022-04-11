import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <div>
      <h3>this is home</h3>
      <p>{user ? user.displayName : 'no user'}</p>

    </div>
  );
};

export default Home;