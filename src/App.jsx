import React, { useEffect, useState } from 'react'
import Login from './components/auth/Login'
import Employeedashboard from './components/Dashboard/Employeedashboard'
import Admindashboard from './components/Dashboard/Admindashboard'
import { getlocalstorage, setlocalstorage } from './utils/Localstorage'
import { useContext } from 'react'
import Authprovider, { Authcontext } from './context/Authprovider'

const App = () => {

  useEffect(()=>{
    setlocalstorage()
    getlocalstorage()
  },)

  const [user,setuser]=useState(null)
  const [loggedinuserdata, setloggedinuserdata]=useState(null)

  const [userdata,setuserdata]=useContext(Authcontext)

  useEffect(()=>{
    const loggedinuser=localStorage.getItem('loggedInUser')
    if(loggedinuser){
      const userdata=JSON.parse(loggedinuser)
      setuser(userdata.role)
      setloggedinuserdata(userdata.data)
    }
  },[]) 

  const handellogin=(email,password)=>{
      if(email=='admin@me.com' && password=='123'){
        setuser('admin')
        console.log("admin")
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }
      else if(userdata){
        const employee=userdata.find((e)=>e.email==email && e.password==password)
        if(employee){
          setuser('employee')
          localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
          console.log("user")
          setloggedinuserdata(employee)
        }
      }
      else{
        console.log("not correct")
      }
  }

  
  return (
    <>
    {!user? <Login handellogin={handellogin}/>: ''}
    {user=="admin"? <Admindashboard changeuser={setuser}/>:  (user=='employee' ? <Employeedashboard changeuser={setuser} data={loggedinuserdata} />:null)}
    {/* <Employeedashboard/> */}
    {/* <Admindashboard/> */}
    </>
  )
}

export default App
