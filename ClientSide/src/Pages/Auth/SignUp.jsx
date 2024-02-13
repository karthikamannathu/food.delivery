
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import OAuth from './OAuth';

export default  function SignUp() {
  const [fromData, setFromData] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setFromData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }))}
const handleSubmit = async(e) => {
  e.preventDefault();
    console.log(fromData)
  try{
    setLoading(true)
    setError(false)
    const res = await fetch('/api/user/signUp', { 
     method: 'POST',
     headers: {'Content-Type': 'application/json' },
     body:JSON.stringify({...fromData})
 });
     const data = await res.json()
 
// console.log("Data",data)
setLoading(false)
 if(data.success === false){
   setError(true);
  return
 }
navigate('/')
}
catch (error){
   setLoading(false);
   setError(true);  
}
};
  return (
    <div className='bg-no-repeat bg-local bg-cover h-full bg-static w-full' style={{
      backgroundImage: `url('${"https://th.bing.com/th/id/R.9446bad0ca0f133ee435665005cfdadf?rik=5Q5L12hQ6B9nkg&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f2560x1600%2f2012%2fFood_Bread_rolls_croissants_Fast_Food_Hamburger_034633_.jpg&ehk=zz0cTx%2b7sZpIlyIhTw%2bHLtmzYcnqzBoiCV94nxb0g2c%3d&risl=&pid=ImgRaw&r=0"}')`,
      objectFit: "contain",
     width:'full'
    }}>
      <div className='p-5 max-w-lg mx-auto '>
      <h1 className='text-4xl text-center font-semibold my-7 text-white font_regular'>Sign Up</h1>
    <form onSubmit ={handleSubmit} className='flex flex-col gap-4 '>
      <input type='text' placeholder='username' className=' border p-3 rounded-lg' 
      id ='username' onChange={handleChange} autoComplete="current-username" ></input>
   
  <input type='text' placeholder='email' className='border p-3 rounded-lg' 
      id ='email' onChange={handleChange} autoComplete="current-email"></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' 
      id ='password' onChange={handleChange} autoComplete="current-password"></input>
      <button disabled={loading} className='bg-red-600 text-white p-3 rounded-lg uppercase hover:opacity-95
       disabled:opacity-88'>{loading ? 'Loading...' : 'Sign Up'}</button>  
         <OAuth/> 
    </form>
    
    <div className='flex gap-2 mt-5  text-lg '>
      <p className=' text-white font-bold'>Have an Account?</p>
    <Link to={"/sign-In"}><samp className='text-orange-500 font-extrabold'>Log In</samp></Link>
    </div>
    <div>
     <p className='text-red-700 mt-5'>{error && 'Something went wrong during sign-up'}</p>
     </div>
    </div>
    </div>
  )

}
