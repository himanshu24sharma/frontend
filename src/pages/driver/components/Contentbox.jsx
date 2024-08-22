import React from "react";
import { useNavigate } from "react-router-dom";

const ContentBox = ({ title, content, id }) => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    //update functionality here
    navigate(`${id}`, {
      state: {
        id: id,
      },
    });
    console.log("update button clicked");
  };
  const handleDelete = () => {
    //delete functionality here
    console.log("delete button clicked", id);
  };
  return (
    <div className="flex border-b-4">
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
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block my-4"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContentBox;
