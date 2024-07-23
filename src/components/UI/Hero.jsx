import React from "react";

function Hero() {
  return (
    <div className="flex gap-2 flex-col m-6">
      <h1 className="text-2xl font-semibold text-center">
        Grid Layout Generator
      </h1>
      <p className="text-center ">
        Enter literal CSS in the form below to edit your grid. This means you
        must have basic CSS grid knowledge to get started.
      </p>
    </div>
  );
}

export default Hero;
