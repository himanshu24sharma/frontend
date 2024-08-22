import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DriverEdit = () => {
  const location = useLocation();
  const id = location.state?.id ?? 0; // Tells if we are editing or creating new
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  useEffect(() => {
    if (id) {
      // Mock fetching existing driver data based on the ID (replace with actual API call)
      const existingDriver = {
        id: id,
        name: "Existing Driver Name",
        phone: "1234567890",
        email: "driver@example.com",
        location: "Driver Location",
      };
      setFormData(existingDriver);
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending data to an API
    console.log("Form Data Submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl mb-4">
        {id ? "Edit Driver" : "Driver Information"}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default DriverEdit;
