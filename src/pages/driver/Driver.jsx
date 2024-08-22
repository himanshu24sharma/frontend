import React from "react";
import ContentBox from "./components/ContentBox";
import Footer from "../../component/footer/footer";
import { useNavigate } from "react-router-dom";

function Driver() {
  const navigate = useNavigate();
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
    <>
      <Footer />
      <div className="mt-16  bg-slate-300	 text-black	">
        <div className="h-screen p-6 flex flex-col items-center ">
          <div className="flex justify-between my-4">
            <h1 className="text-3xl font-bold mx-8">Drivers List</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("create", {
                  state: {},
                });
              }}
            >
              Create
            </button>
          </div>
          <div className="overflow-y-auto flex-grow w-full max-w-4xl mt-4">
            <ul>
              {drivers.map((driver) => (
                <li key={driver.id}>
                  <ContentBox
                    title={driver.name}
                    content={[driver.email, driver.phone, driver.location]}
                    id={driver.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Driver;
