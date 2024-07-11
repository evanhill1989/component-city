import React from "react";

function Section({ children }) {
  return (
    <section className="panel">
      <div className="section-content grid grid-cols-5">{children}</div>
    </section>
  );
}

export default Section;
