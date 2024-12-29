import React from 'react'

const FailedTask = ({data}) => {

  
  return (
    <div className='min-h-80   w-[300px] bg-gray-300 rounded-xl flex-shrink-0 p-5 flex-nowrap'>
            <div className='flex justify-between '>
                <h3 className='bg-red-600 rounded-lg px-2'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'> {data.title} </h2>
            <p className='text-sm mt-2'> {data.taskDescription}</p>
            <div>
            <div className='mt-2'>
                <button className='w-full bg-red-700'>Reject</button>
            </div>
        </div>
    </div>
  )
}

export default FailedTask
