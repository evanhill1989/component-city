import React from "react";

function SectionHeader({ children }) {
  return (
    <div className="w-full col-span-5 bg-slate-950 text-white text-4xl pt-5 mb-[-7px] font-400">
      {children}
    </div>
  );
}

export default SectionHeader;
