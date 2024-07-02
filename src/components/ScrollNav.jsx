import React from "react";

function ScrollNav() {
  return (
    <div className="fixed w-6 h-[100vh] border-2 border-pink-600 right-[20%] grid grid-flow-row text-white items-center justify-center p-4">
      <div className="gray w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Grid</p>
      </div>
      <div className="red w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Card</p>
      </div>
      <div className="yellow w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Banner</p>
      </div>
      <div className="green w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Badge</p>
      </div>
      <div className="blue w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Toast</p>
      </div>
      <div className="indigo w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Navigation</p>
      </div>
      <div className="purple w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Header</p>
      </div>
      <div className="pink w-full p-4 h-full flex items-center bg-slate-800 border-white border-2">
        <p>Testimonial</p>
      </div>
    </div>
  );
}

export default ScrollNav;
