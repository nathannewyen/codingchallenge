import React from "react";
import earth from "../../img/earth.jpeg";

const Earth = () => {
  return (
    <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
      <div className="relative">
        <img
          className="absolute top-0 left-0 w-full h-32 object-cover"
          src={earth}
          alt="earth"
        />
      </div>
      <p className="text-3xl font-bold text-left p-10">Earth</p>
    </div>
  );
};

export default Earth;
