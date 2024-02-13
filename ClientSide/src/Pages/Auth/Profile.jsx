import React, {useEffect, useRef, useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import {app} from '../../Firebase.js'
import {   updateUserStart
  , updateUserSuccess
  ,updateUserFailure, 
  deleteUserInStart,
   deleteUserSuccess, 
   deleteUserFailure, signOutUserSuccess, getUser } from '../../Redux/User/UserSlice.jsx'
   export default function Profile() {
  const dispatch = useDispatch(getUser);
const fileRef = useRef(null);
   const [image,setImage] = useState(undefined)
   const [imageUploadPectage,setImageUploadPectage] = useState(0)
   const [fileUploadError,setFileUploadError] = useState(false)
   const [fromData,setfromData] = useState ({})
   const [updateSuccess,setUpdateSuccess] = useState(false)
   
   let {  currentUser,loading,error} = useSelector(getUser);
   const userpams = currentUser._id
   console.log(userpams,'currentUsers')

  //  console.log(fileUploadError,"fileUploadError")
  // console.log(fromData,"from")
    // connsole.log({currentUsers},'currentUser')
//firbase storege protocal
// allow read;
//       allow write: if
//       request.resource.size < 2* 1024*1024 &&
//       request.resource.contentType.matches('image/.*')
useEffect(()=>{
  if(image){
    handleFileUpload(image);

  }
},[image]);
const handleFileUpload = async (image) => {
  const storage = getStorage(app); 
  const fileName = new Date().getTime() + image.name;
  const storageRef = ref(storage,fileName)
  const uploadTask = uploadBytesResumable(storageRef, image);
 

uploadTask.on('state_changed',
(snapshot)  => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log(progress,"imageUploadPectage")
setImageUploadPectage(Math.round(progress))
} ,
(error) => {
  setFileUploadError(true);
  },
() =>{
  getDownloadURL(uploadTask.snapshot.ref).then
  ((downloadURL) => 
      setfromData({...fromData, avatar:downloadURL})
);
 }
);

};

const handleChange = async(e) =>{
  setfromData({...fromData, [e.target.id]: e.target.value});
};
const handleSubmit = async (e) => {

  e.preventDefault();
  
  try {
   
    dispatch( updateUserStart());
  
   const res = await fetch (`/api/auth/update/${currentUser._id}`,{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(fromData),
   }) ;
   const data =  await res.json();
  console.log('data',data)
   if (data.success === false) {
    dispatch(updateUserFailure(data.message));
    return;
   }
   dispatch(updateUserSuccess(data));
   setUpdateSuccess(true);
  } catch (error) {
    dispatch(updateUserFailure(error.message))
  }
};

const handleDeleteAcount = async () =>{
  try {
    dispatch(deleteUserInStart());
   const res = await fetch (`/api/auth/delete/${currentUser._id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json',
    },
   }) ;
   const data = await res.json();
  
   if (data.success === false) {
    dispatch(deleteUserFailure(data));
    return;
   }
   dispatch(deleteUserSuccess(data));
  
 
  } catch (error) {
    dispatch(deleteUserFailure(error));
  }
}


const handleSigOut = async () => {
  try {
    await fetch('/api/auth/signout');
   dispatch( signOutUserSuccess());
  } catch (error) {
   console.log (error)
  }
}

  return (
    <>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
   
    <form className = 'flex flex-col gap-4' onSubmit={handleSubmit} id ='userId'>
      <input onChange={(e)=>setImage(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/*'/>
        <img onClick ={() => fileRef.current.click()} src = {fromData.avatar || currentUser.avatar} alt='profile'
         className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 border-slate-950 '/>
         <p className='text-sm self-center'>
          {fileUploadError ?
          ( <span className='text-red-700'>Error Image Upload (Image must be less than 2 mb)</span> ) 
         
         : imageUploadPectage > 0 && imageUploadPectage < 100 ?
         ( <span className = 'text-slate-700'> {`Uploading: ${imageUploadPectage} %`  }</span> )
         : imageUploadPectage === 100 ? (<span className='text-green-700'>Image Successfully Upload</span>)
         : (
           '' 
        )}
          </p>
        <input defaultValue={currentUser.username} onChange={handleChange} type='text' placeholder='Username' className='border p-3 rounded-lg' id='username'/>
    <input defaultValue={currentUser.email} onChange={handleChange} type='text' placeholder='Email' className='border p-3 rounded-lg' id='email'/>
        <input onChange={handleChange} type='text' placeholder='Password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Update'}
        </button>
    </form>
<div className='flex justify-between mt-5'>
  <span onClick={handleDeleteAcount} className='text-red-700 cursor-pointer'>Delete</span>
  <span onClick={handleSigOut} className='text-red-700 cursor-pointer'>Sign out</span>
</div>
<p className='text-red-700 mt-5'>{error  && 'Something went wrong!'}</p>
<p className='text-green-700 mt-5'>{updateSuccess && 'user is updated successfully.'}</p>
</div>

</>
  )
}
