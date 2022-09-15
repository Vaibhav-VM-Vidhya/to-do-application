import React, { useEffect, useRef,useState } from "react";
import Tasks from "./Tasks/Tasks";
const Mainpage = () => {
  const title = useRef();
  const [addtask, setaddtask] = useState(false)
  const decription = useRef();
  const date = useRef()

  const [cart, setcart] = useState({});

  // const [sidebar, setsidebar] = useState(false);

  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem("cart"))) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        savecart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }

    
  }, []);

  const savecart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
  };
  const currentdate = new Date(); 
  const datetime =  currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

  const addtotasks = async (taskid,title,desc,lastdate) => {
    let newCart = cart;
      
      newCart[taskid] = { taskid,title,desc,datetime,lastdate};
    
    setcart(newCart);
    savecart(newCart);
    window.location.reload()
  };

  // const clearcart = () => {
  //   setcart({});
  //   savecart({});
  // };

  const removefromtasks = (taskid) => {
    let newCart = cart;
    // console.log(cart)
    
      delete newCart[taskid];
    
    setcart(newCart);
    savecart(newCart);
  };
 

  const onsubmithandler = () => {
    const t = title.current.value;
    const d = decription.current.value;
    const da = date.current.value;
    console.log(t,d,da)
    addtotasks(t,t,d,da)
  };
  let data = [];
  for (const key in cart) {
        // console.log(catagiri[key]);
        // console.log(key)
        
       
        data = data.concat(cart[key])
        // 
        // data = data.concat(catagiri[key]);
        
        
}

   
const onaddtaskopenerhandler = ()=>{
  setaddtask(!addtask)
}

  // task.map((data)=>{console.log(data)})
  return (
    <div className="">
      {!addtask && 
      <div onClick={onaddtaskopenerhandler} className="cursor-pointer w-full flex justify-center items-center flex-col space-y-1 my-4">
        <div class="border bg-black border-black w-4"></div>
        <div class="border bg-black border-black w-4"></div>
        <div class="border bg-black border-black w-4"></div>

      </div>}
      {addtask && 
      <div onClick={onaddtaskopenerhandler} className="cursor-pointer w-full flex justify-center items-center flex-col space-y-1 my-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
</svg>


      </div>}
     {addtask &&
      <div className="w-full  ">
      <div className=" lg:w-2/6 md:w-1/2 mx-2 md:mx-auto lg  rounded-lg px-8 md:py-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Add Task
        </h2>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">
            select Type of task Catagery
          </label>

          <input
          ref={title}
            type="text"
            placeholder="Enter Title for a Task"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></input>
        </div>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">
            Enter Task
          </label>
          <input
           ref={decription}
            type="text"
            id=""
            placeholder="Enter task here"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">
            Enter Last Date
          </label>
          <input
           ref={date}
            type="date"
            id=""
            placeholder="Enter task here"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={onsubmithandler}
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg"
        >
          ADD TASK
        </button>
      </div>
    </div>}
      {data.map((d)=>{
        return  <Tasks title={d.title} desc={d.desc} remove={removefromtasks} date={d.lastdate}/>
      })}
     
    </div>
  );
};

export default Mainpage;
