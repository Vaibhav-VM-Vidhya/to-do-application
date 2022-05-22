import React from "react";
import { motion } from "framer-motion";
import task_img from './task.png'
const Tasks = () => {
  return (
    <motion.div className="w-screen border-2 my-2">
      <div className="flex justify-between px-2 py-2">
        <div className="flex space-x-2">
          <div className="h-12 w-1"><img src={task_img} /></div>
          <div>Subject</div>
        </div>
        <div className="flex font-mono space-x-2">
          <div>Time ago</div>
          <div>Close</div>
        </div>
      </div>
      <div>
          <h1 className="font-bold">Do Your home word</h1>
      </div>
    </motion.div>
  );
};

export default Tasks;
