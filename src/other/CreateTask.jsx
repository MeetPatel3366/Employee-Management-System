import React from 'react'

const CreateTask = () => {
  const submitHandler=()=>{
    
  }
  return (
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form className="w-full flex flex-wrap items-start justify-between">
          <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Task Title" />
          </div>


          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="date" name="" id="" />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="employee name" />
          </div>

          <div className="text-sm text-gray-300 mb-0.5">
            <h3>Category</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="design, dev, etc" />
          </div>
          </div>
          
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" placeholder="Detailed description of task"></textarea>
          <button className="bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full">Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
