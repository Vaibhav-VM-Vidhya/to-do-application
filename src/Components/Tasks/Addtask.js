import React, { useState } from "react";
import Addtaskm from "./Addtaskm";
import plus from "./plus.png";
// import Tasks from "./Tasks";
// import Taskstate from '../../Context/Notes/Taskstate'
const Addtask = () => {
  // const {module,setmodule} = useContext(Taskstate);
  const [module, setmodule] = useState(false);
  return (
    <>
      {module && <Addtaskm mod={setmodule}/>}
      <div
        className="fixed bottom-8 right-8"
        onClick={() => {
          setmodule(!module);
        }}
      >
        <img src={plus} className="h-12 w-12" />
      </div>
    </>
  );
};

export default Addtask;
