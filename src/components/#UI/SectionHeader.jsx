import React from "react";

function SectionHeader({ children }) {
  return (
    <div className="w-full col-span-5 bg-slate-150 text-white text-[12rem] pt-5 mb-[-7px] font-700">
      {children}
    </div>
  );
}

export default SectionHeader;
