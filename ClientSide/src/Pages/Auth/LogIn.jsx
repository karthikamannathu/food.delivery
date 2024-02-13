import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signSuccess, signFailure } from '../../Redux/User/UserSlice.jsx';
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/api/user/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...formData }),
      });
    console.log(res)
      const data = await res.json();

      if (data.success === false) {
        dispatch(signFailure(data));
        return;
      }
      dispatch(signSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signFailure(error));
    }
  };

  return (
  <div className='bg-no-repeat bg-local bg-cover h-full bg-static w-full' style={{
    backgroundImage: `url('${"https://th.bing.com/th/id/R.9446bad0ca0f133ee435665005cfdadf?rik=5Q5L12hQ6B9nkg&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f2560x1600%2f2012%2fFood_Bread_rolls_croissants_Fast_Food_Hamburger_034633_.jpg&ehk=zz0cTx%2b7sZpIlyIhTw%2bHLtmzYcnqzBoiCV94nxb0g2c%3d&risl=&pid=ImgRaw&r=0"}')`,
    objectFit: "contain",
   width:'full'
  }}>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-semibold my-7 text-white font_regular '>Log In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input
          type='text'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
          autoComplete='current-email'
          required
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
          autoComplete='current-password'
          required
        />
        <button
          disabled={loading}
          className='bg-red-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-88'>
          {loading ? 'Loading...' : 'Log In'}
        </button>
      </form>

      <div className='flex gap-2 mt-5  font-semibold text-white'>
        <p>Don't have an Account?</p>
        <Link to='/sign-Up' className=' text-orange-600  font-bold font_regular'>
          Sign Up
        </Link>
      </div>
      <div>
        <p className='text-red-700 mt-5 font-semibold'>{error ? error.message || 'Something went wrong!' : ''}</p>
      </div>
    </div>
    </div>
  );
}

export default SignIn;
