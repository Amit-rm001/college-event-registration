import React, { useState } from "react";
import axios from "axios";

function AddEvent() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/events", form)
      .then(() => {
        alert("Event Created 🎉");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" placeholder="Title" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="description" placeholder="Description" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="date" type="date" onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 border rounded" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;