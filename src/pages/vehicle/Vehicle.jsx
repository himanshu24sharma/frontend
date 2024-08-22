import React from "react";
import ContentBox from "./components/ContentBox";

function Vehicle() {
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

  const vehicles = [
    {
      id: "1234",
      Model: "ABC",
      LicensePlate: "1221ahd",
    },
    {
      id: "12345",
      Model: "ABC",
      LicensePlate: "1221ahd",
    },
    {
      id: "12346",
      Model: "ABC",
      LicensePlate: "1221ahd",
    },
    {
      id: "12347",
      Model: "ABC",
      LicensePlate: "1221ahd",
    },
  ];

  return (
    <div className=" h-screen p-6 items-center">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Vehicle List</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded block">
          Create
        </button>
      </div>
      <div className="overflow-y-auto flex-grow w-full max-w-4xl">
        <ul>
          {vehicles.map((vehicle) => (
            <li key={vehicle.id}>
              <ContentBox
                title={vehicle.Model}
                content={[vehicle.LicensePlate]}
                driverinfo={drivers}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vehicle;
