import React, { useState } from "react";
import { motion } from "framer-motion";
import task_img from "./task.png";
import close_img from "./close.png";

const Tasks = ({title,desc,date,remove}) => {
  const [close_courser, setclose_courser] = useState(true);
  
  
  return (
    <>
      {close_courser && (
        <motion.div className=" shadow-xl shadow-white border-2 border-blue-800 my-2 mx-2 md:mx-auto rounded-2xl md:w-[700px] ">
          <div className="flex justify-between px-2 py-2">
            <div className="flex space-x-2 justify-center items-center">
              <div className="h-7 w-7 md:h-8 md:w-8">
                <img src={task_img} alt="something relted to task logo" />
              </div>
              <div className="text-xl md:text-2xl">{title}</div>
            </div>
            <div className="flex font-mono space-x-2">
              
              <div
                className="h-6 w-6 cursor-pointer"
                onClick={() => {
                  setclose_courser(false);
                  remove(title)
                }}
              >
                <img src={close_img} alt="something relted to task logo" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold mx-2 mb-3">{desc}</h1>
          </div>
          <div className="mx-2 font-thin  flex justify-end items-center">Last Date : {date}</div>
        </motion.div>
      )}
    </>
  );
};

export default Tasks;
