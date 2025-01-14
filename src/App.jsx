import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)

  const authData=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')

    if(loggedInUser)
    {
      const userData=JSON.parse(loggedInUser)
      console.log(userData);  
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
    }
    
  },[])

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123')
    {
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      console.log("user:",user);
      console.log("This is Admin");      
    }
    else if(authData)
    {
      const employee=authData.employees.find((e)=>email==e.email && password==e.password)
      if(employee)
      {
        setUser('employee')
      }
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:{employee}}))
      console.log("This is User"); 
      console.log(user);
    }
    else
    {
      alert('Invalid Credentials')
    }
  }

  
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user=="admin" ? <AdminDashboard changeUser={setUser}/> : (user=='employee'? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null) }
    </>
  )
}

export default App
