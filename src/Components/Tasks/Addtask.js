import React from "react";
import plus from './plus.png'
import Tasks from "./Tasks";
const Addtask = () => {
  return (
    <div className="fixed bottom-8 right-8" onClick={()=>{}}>
      <img src={plus} className="h-12 w-12"/>
    </div>
  );
};

export default Addtask;
