import React from 'react'
import Header from '../others/Header'
import Tasklist from '../others/Tasklist'
import Othertasklist from '../others/othertasklist'

const Employeedashboard = (props) => {
  
  
  return (
    <div className='p-15 '>
      <Header changeuser={props.changeuser} data={props.data}/>
      <Tasklist data={props.data}/>
      <Othertasklist data={props.data}/>
    </div>
  )
}

export default Employeedashboard
