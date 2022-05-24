import React, { useState } from "react";
import Addtask_module from "./Addtask_module";
import plus from "./plus.png";
import Tasks from "./Tasks";
const Addtask = () => {
  const [module, setmodule] = useState(false);
  return (
    <>
      {module && <Addtask_module />}
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
