import React from "react";
import mars from "../../img/mars.jpeg";

const Mars = () => {
  return (
    <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
      <div className="relative">
        <img
          className="absolute top-0 left-0 w-full h-32 object-cover"
          src={mars}
          alt="mars"
        />
      </div>
      <p className="text-3xl font-bold text-left p-10">Mars</p>
    </div>
  );
};

export default Mars;
