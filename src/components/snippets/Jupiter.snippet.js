import React from "react";
import jupiter from "../../img/jupiter.jpeg";

const Jupiter = () => {
  return (
    <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
      <div className="relative">
        <img
          className="absolute top-0 left-0 w-full h-32 object-cover"
          src={jupiter}
          alt="jupiter"
        />
      </div>
      <p className="text-3xl font-bold text-left p-10">Jupiter</p>
    </div>
  );
};

export default Jupiter;
