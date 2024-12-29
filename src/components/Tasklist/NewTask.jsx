import React, { useState } from "react";

const NewTask = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleReject = () => {
    if (data?.taskTitle) {
      localStorage.removeItem(data.taskTitle);
      console.log(`${data.taskTitle} removed from localStorage`);

      
      setIsVisible(false);

    } else {
      console.error("taskTitle is undefined or invalid");
    }
  };

  if(!isVisible) return null

  return (
    <div
      className="min-h-80 w-[300px] bg-gray-500 rounded-xl flex-shrink-0 p-5 flex-nowrap"
    >
      <div className="flex justify-between">
        <h3 className="bg-red-600 rounded-lg px-2">{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-4">
        <button onClick={()=>isVisible(true)} className="bg-green-400 py-2 border-2 border-green-600 rounded-lg px-5 text-sm">
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-400 py-2 border-2 border-red-600 rounded-lg px-5 text-sm"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default NewTask;
