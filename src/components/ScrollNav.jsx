import React, { forwardRef } from "react";

const ScrollNav = forwardRef((props, ref) => {
  return (
    <div className="fixed right-0 z-50 w-32 h-[100vh]   grid grid-flow-row text-white items-center justify-center p-4">
      <div
        ref={(el) => (ref.current[0] = el)}
        className="gray w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Grid</p>
      </div>
      <div
        ref={(el) => (ref.current[1] = el)}
        className="red w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Card</p>
      </div>
      <div
        ref={(el) => (ref.current[2] = el)}
        className="yellow w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Banner</p>
      </div>
      <div
        ref={(el) => (ref.current[3] = el)}
        className="green w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Badge</p>
      </div>
      <div
        ref={(el) => (ref.current[4] = el)}
        className="blue w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Toast</p>
      </div>
      <div
        ref={(el) => (ref.current[5] = el)}
        className="indigo w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Navigation</p>
      </div>
      <div
        ref={(el) => (ref.current[6] = el)}
        className="purple w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Header</p>
      </div>
      <div
        ref={(el) => (ref.current[7] = el)}
        className="pink w-full p-4 h-full flex items-center bg-slate-800 border-white border-2"
      >
        <p>Testimonial</p>
      </div>
    </div>
  );
});

ScrollNav.displayName = "ScrollNav";

export default ScrollNav;
