import React,{useEffect,useState} from "react";

const Heading = () => {
  
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return (
    <>
   
      <div className="subpixel-antialiased font-extrabold  flex justify-center w-screen text-xl md:text-3xl mx-auto md:max-w-[1400px]  h-20 items-center">
        Welcome to TO-DO Application 
      </div>
    </>
  );
};

export default Heading;
