import React from "react";

const ContentBox = ({ title, content, driverinfo }) => {
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
        <div className="col-span-1 w-36 sm:col-span-2 md:col-span-2 align-left bg-slate-400">
          <select
            className={`border  bg-slate-200 border-gray-300 focus:border-slate-400 block w-full text-black rounded-md focus:ring-slate-400`}
            value={""}
            onChange={() => {}}
          >
            <option value="" className="">
              Select an option
            </option>
            {driverinfo?.map((option) => {
              return (
                <option key={option.id} value={option.name} className="">
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
