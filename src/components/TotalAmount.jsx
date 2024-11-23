import React from "react";

const TotalAmount = ({ total, handleClearAll }) => {
  return (
    <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-xl font-bold text-gray-800 p-4 bg-gray-100 rounded-md shadow-sm">
        Total Amount: ${total}
      </div>
      <button
        onClick={handleClearAll}
        className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        Clear All
      </button>
    </div>
  );
};

export default TotalAmount;
