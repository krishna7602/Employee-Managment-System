import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.taskTitle)
  return (
    <div className='min-h-80   w-[300px] bg-yellow-400 rounded-xl flex-shrink-0 p-5 flex-nowrap'>
            <div className='flex justify-between '>
                <h3 className='bg-red-600 rounded-lg px-2'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'> {data.taskTitle} </h2>
            <p className='text-sm mt-2'> {data.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-400 py-2 px-3 rounded-xl text-sm '>Mark as completed</button>
                <button className='bg-red-400 py-2 px-3  rounded-xl text-sm '>Mark as failed</button>
            </div>
        </div>
  )
}

export default AcceptTask
