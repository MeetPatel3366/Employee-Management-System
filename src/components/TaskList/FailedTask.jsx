import React from "react";

const FailedTask = ({data}) => {
  const { title,category,description,date}=data

  return (
    <div className="flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 text-sm py-1 rounded">{category}</h3>
        <h4 className="text-sm">{date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
      <p className="text-sm mt-2">
        {description}
      </p>
      <div className="mt-2">
        <button className="w-full">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
