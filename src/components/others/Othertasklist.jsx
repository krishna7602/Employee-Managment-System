import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import NewTask from '../Tasklist/NewTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'

const Othertasklist = ({data}) => {
  return (
    <div id='tasklist' className='min-h-screen overflow-x-auto  flex items-center justify-start gap-5 py-5 w-full mt-5 '>
        { data.tasks.map((e , idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e}/>
            }
            if(e.newTask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e}/>
            }
            if(e.failedTask){
                return <FailedTask key={idx} data={e}/>
            }
            
        })}
        
    </div>
  )
}

export default Othertasklist
