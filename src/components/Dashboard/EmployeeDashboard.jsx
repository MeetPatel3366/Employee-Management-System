import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log("data : ",data);
  
  
  return (
    <div className='bg-[#1C1C1C] p-10 h-screen'>
      <Header data={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
