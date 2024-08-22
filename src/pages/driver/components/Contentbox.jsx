import React from "react";

const ContentBox = ({ title, content }) => {
  return (
    <div className="flex">
      <div className="border border-gray-300 p-4 my-4 rounded-lg bg-gray-100 mx-10">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="space-y-1">
          {content.map((detail, index) => (
            <p key={index} className="text-gray-700">
              {detail}
            </p>
          ))}
        </div>
      </div>
      <div className="border border-gray-300 p-4 my-4 rounded-lg bg-gray-100">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block my-4">
          Update
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContentBox;
