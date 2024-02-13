import React from 'react';
import {GoogleAuthProvider, signInWithPopup,getAuth} from 'firebase/auth'
import { GoogleIcon } from '../../Utils/contants'
import { app } from '../../Firebase';
 import { useDispatch } from 'react-redux';
import { signSuccess } from '../../Redux/User/UserSlice';
import { useNavigate} from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/user/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button type='button' onClick={handleGoogleClick} className='flex justify-center space-x-2 p-3 rounded-lg uppercase border hover:opacity-95 bg-slate-100'>
     Google<img src = {GoogleIcon } alt='logo' width={24}></img>
    </button>
  )
}
