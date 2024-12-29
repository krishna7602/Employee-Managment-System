import React, { useState } from 'react'

const Login = ({handellogin}) => {
    const[email, setemail]=useState("");

    const[password,setpassword]=useState("")

    

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
      <div className='border-2 border-emerald-700 p-16 h-100 w-100 rounded-xl'>
        <form className='flex flex-col justify-center items-center ' onSubmit={(e)=>{
            e.preventDefault();
            handellogin(email,password)
            setemail("");
            setpassword("");
        }}>
            <input required 
            value={email}
            onChange={(e)=>{
                setemail(e.target.value)
            }}
            type="email" placeholder='enter your email' className='border-2 border-emerald-700 rounded-full py-4 px-5 text-xl outline-none bg-transparent text-white' />
            <input required type="password" 
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            placeholder='enter your password'className='border-2 border-emerald-700 rounded-full py-4 px-5 text-xl outline-none bg-transparent mt-4 placeholder: text-black text-white'/>
            <button className='bg-teal-200 py-4 px-10 mt-10 rounded-xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...'>Log in</button>
        </form>
        <div className='mt-5'>
        <p className='text-white'>for Admin Login please use: email: <span className='font-bold'>admin@me.com</span> and password: <span className='font-bold'>123</span></p>
        <p className='text-white'>for Employee Login please use: email: <span className='font-bold'>employee1@example.com</span> and password: <span className='font-bold'>123</span></p>
        <p className='text-white'>for Employee Login please use: email: <span className='font-bold'>employee2@example.com</span> and password: <span className='font-bold'>123</span></p>
        <p className='text-white'>for Employee Login please use: email: <span className='font-bold'>employee3@example.com</span> and password: <span className='font-bold'>123</span></p>
        <p className='text-white'>for Employee Login please use: email: <span className='font-bold'>employee4@example.com</span> and password: <span className='font-bold'>123</span></p>
        <p className='text-white'>for Employee Login please use: email: <span className='font-bold'>employee5@example.com</span> and password: <span className='font-bold'>123</span></p>
        </div>
        
      </div>
    </div>
  )
}

export default Login
