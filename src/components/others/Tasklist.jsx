import React from 'react'

const Tasklist = ({data}) => {
  return (
    <div className='flex justify-between mt-10 mx-10 gap-5'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task </h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-300'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-yellow-200'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
        
      
    </div>
  )
}

export default Tasklist
