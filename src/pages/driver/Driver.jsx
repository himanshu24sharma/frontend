import React from "react";
import ContentBox from "./components/ContentBox";

function Driver() {
  const drivers = [
    {
      id: "123",
      name: "ABC",
      email: "abc@gmail.com",
      phone: "9999900000",
      location: "12434",
    },
    {
      id: "124",
      name: "ABD",
      email: "abd@gmail.com",
      phone: "9999900000",
      location: "12353453",
    },
    {
      id: "125",
      name: "XYZ",
      email: "xyz@gmail.com",
      phone: "8888800000",
      location: "98765432",
    },
  ];

  return (
    <div className=" h-screen p-6 items-center">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Drivers List</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded block">
          Create
        </button>
      </div>
      <div className="overflow-y-auto flex-grow w-full max-w-4xl">
        <ul>
          {drivers.map((driver) => (
            <li key={driver.id}>
              <ContentBox
                title={driver.name}
                content={[driver.email, driver.phone, driver.location]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Driver;
