import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log("authData", authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="h-[80%]">
        {authData.employees.map((curEmp,idx) => {
          return (
            <div key={idx} className="mb-2 py-2 px-4 flex justify-between border-2 rounded">
              <h2 className="text-lg font-medium w-1/5">{curEmp.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {curEmp.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {curEmp.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {curEmp.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {curEmp.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
