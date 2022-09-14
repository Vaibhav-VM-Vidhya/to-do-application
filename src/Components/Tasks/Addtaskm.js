import React,{useState} from 'react'

const Addtaskm = ({mod}) => {
  const [tasktype, settasktype] = useState("");
  const [task, settask] = useState("");
  let data =[];
  const onsubmithandler=()=>{
    data = data.concat([tasktype,task])
    localStorage.setItem("tasks", data);
    mod(false)
   
  }
  

  

  return (
    <div className="fixed flex justify-center items-center backdrop-blur-sm">
     
      <div className=" h-screen w-screen backdrop-blur-sm  flex items-center ">
        <div className=" lg:w-2/6 md:w-1/2 mx-2 md:mx-auto lg bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Add Task
          </h2>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">
              select Type of task
            </label>
            
            <select onChange={(e) => settasktype(e.target.value)}  name="Task" id="type_of_task " className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="College">College!</option>
              
            </select>
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">
              Enter Task
            </label>
            <input
             
              type="text"
              id=""
              placeholder="Enter task here"
              onChange={(e) => settask(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button onClick={onsubmithandler} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg">
            ADD TASK
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Addtaskm