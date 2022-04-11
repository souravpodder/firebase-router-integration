import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h3> The products are being visited by</h3>
      <p>{user ? user.displayName : 'no one'}</p>
    </div>
  );
};

export default Products;