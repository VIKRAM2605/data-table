import React from 'react'
import useStore from './Store';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const {username,isloggedin,isLogin,handleChangeUsername,password,handlepass}=useStore();
  const submit=()=>{
    console.log(username)
    if(username=="user" && password=="1234"){
      console.log(username)
    isLogin()
    navigate('/data-table/data');}
    else if(username!="" && password!=""){
       navigate('/data-table/404');
    }
  }
  const navigate=useNavigate();
  return (<>
      <div className='w-11/12 flex justify-center  mt-60'>
      <div className='border-2 w-3/12 relative'>
        <h1 className='text-6xl font-sans text-center'>Credentials</h1>
      <div className="mt-5">
        <form >
        <label htmlFor="username" className='ml-4'>UserName&nbsp;&nbsp;:</label>
        <input type="text" id='username' onChange={handleChangeUsername} className="border-2 ml-3 mb-3" required /><br />
        <label htmlFor="Password" className='ml-4'>Password&nbsp;&nbsp;&nbsp;&nbsp;:</label>
        <input type="password" id='Password' className="border-2 ml-3" onChange={handlepass} required />
        <button onClick={submit} className="border-2 mt-1.5 mb-5 ml-4 rounded-full p-1">Submit</button>
        </form>
        </div>
    </div>
    </div>
    </>
  )
}
