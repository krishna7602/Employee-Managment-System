import React, { useState } from 'react'
import { setlocalstorage } from '../../utils/Localstorage'

const Header = (props) => {

  const firstname = props?.data?.firstname || 'Admin';

  const logout=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeuser('')
  }

  return (
    <div className='flex items-end justify-between text-white  bg-emerald-800 p-10'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-bold'>{firstname} 👋</span></h1>
      <button onClick={logout} className='bg-red-500 text-white px-5 py-2 rounded-xl text-lg '>Log Out</button>
    </div>
  )
}

export default Header
