import React from "react";

const SearchPage = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Q. What are you looking for?</h3>
        <input
          type="text"
          placeholder="Enter 3 or more characters"
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 text-sm"
        />
      </div>
    </div>
  );
};

export default SearchPage;