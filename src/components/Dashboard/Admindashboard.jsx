import React from 'react'
import Header from '../others/Header'
import Admintasklist from '../others/Admintasklist'
import Alltask from '../others/Alltask'

const Admindashboard = (props) => {
  return (
    <div>
      <Header changeuser={props.changeuser}/>
      <Admintasklist/>
      <Alltask/>
    </div>
  )
}

export default Admindashboard
