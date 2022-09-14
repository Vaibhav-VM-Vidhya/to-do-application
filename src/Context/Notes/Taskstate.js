import Notecontext from "./Notecontext";
import React from 'react';
const Taskstate=(props)=>{

    
   
return(
    <Notecontext.Provider value={{}}>
        {props.children}
    </Notecontext.Provider>
);
}
export default Taskstate;