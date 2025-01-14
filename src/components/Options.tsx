import React from "react";
import NumberSection from "./NumberSection";

const Options = () => {
  return (
    <div className="secondary-column">
      <h1 className="text-2xl font-bold mb-4">Options</h1>
      <div className="font-bold mb-4 flex flex-col items-start sm:flex-row sm:items-center">
        <label className="flex items-center">
          <div className="text-xl">Additional Number:</div>
        </label>
        <input type="number" className="mt-1 mr-2 block size-16 text-3xl text-center rounded-md shadow-sm focus:outline-none sm:ml-4" defaultValue={0}/>
      </div>
      <NumberSection dice="d4" />
      <NumberSection dice="d6" />
      <NumberSection dice="d8" />
      <NumberSection dice="d10" />
      <NumberSection dice="d12" />
      <NumberSection dice="d20" />
      
      <div className="flex space-x-0 rounded-md overflow-hidden shadow-sm">
        <button className="button bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500">
          Roll
        </button>
        <div className="w-px bg-gray-300"></div>
        <button className="button bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-500">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Options;
