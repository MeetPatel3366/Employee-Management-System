import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle,setTaskTitle]=useState('')
  const [taskDescription,setDescription]=useState('')
  const [taskDate,setTaskDate]=useState('')
  const [asignTo,setAsignTo]=useState('')
  const [category,setCategory]=useState('')

  const [newTask,setNewTask]=useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
    
    setTaskTitle('')
    setDescription('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')

    const data=JSON.parse(localStorage.getItem('employees'))
    console.log(data);
    
    data.forEach((curEle)=>{
      if(asignTo==curEle.firstName)
      {
        console.log(curEle.tasks.push(newTask));
        console.log(curEle)
      }
      
    })
  }
  return (
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form onSubmit={submitHandler} className="w-full flex flex-wrap items-start justify-between">
          <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Task Title" />
          </div>


          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input value={taskDate} onChange={(e)=>setTaskDate(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="date" name="" id="" />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input value={asignTo} onChange={(e)=>setAsignTo(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="employee name" />
          </div>

          <div className="text-sm text-gray-300 mb-0.5">
            <h3>Category</h3>
            <input value={category} onChange={(e)=>setCategory(e.target.value)} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="design, dev, etc" />
          </div>
          </div>
          
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea value={taskDescription} onChange={(e)=>setDescription(e.target.value)} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" placeholder="Detailed description of task"></textarea>
          <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
