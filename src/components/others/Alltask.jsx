import React, { useContext } from 'react'
import { Authcontext } from '../../context/Authprovider'

const Alltask = () => {
    const [userdata,setuserdata]=useContext(Authcontext)
    
  return (

    
    <div className='p-5 mt-5 rounded-lg '>
        <div className='bg-emerald-900 mb-3 flex justify-between rounded-lg py-2 px-4'>
            <h2 className='text-white'>Name</h2>
            <h2 className='text-pink-400'>Active Task</h2>
            <h2 className='text-yellow-200'>Newtask</h2>
            <h2 className='text-blue-300'>Completed</h2>
            <h2 className='text-red-500'>Failed</h2>
          </div>
          
        {userdata.map((e,idx)=>{
            return <div key={idx}className='bg-transparent mb-3 flex border-2 border-emerald-600  justify-between rounded-lg py-2 px-4'>
            <h2 className='text-white'>{e.firstname}</h2>
            <h2 className='text-pink-400'>{e.taskNumbers.active}</h2>
            <h2 className='text-yellow-200'>{e.taskNumbers.newTask}</h2>
            <h2 className='text-blue-300'>{e.taskNumbers.completed}</h2>
            <h2 className='text-red-500'>{e.taskNumbers.failed}</h2>
          </div>
        })}

      
    </div>
  )
}

export default Alltask
