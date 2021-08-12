import React from "react";
import venus from "../../img/venus.jpeg";

const Venus = () => {
  return (
    <div className="grid grid-cols-2 h-32 border border-gray-200 my-4">
      <div className="relative">
        <img
          className="absolute top-0 left-0 w-full h-32 object-cover"
          src={venus}
          alt="venus"
        />
      </div>
      <p className="text-3xl font-bold text-left p-10">Venus</p>
    </div>
  );
};

export default Venus;
