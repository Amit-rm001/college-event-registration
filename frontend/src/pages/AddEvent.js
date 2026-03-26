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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/events",
        form
      );

      console.log(res.data);
      alert("Event Created 🎉");

      // ✅ Clear form after submit
      setForm({
        title: "",
        description: "",
        date: "",
        location: ""
      });

    } catch (err) {
      console.error("Error creating event:", err);
      alert("Failed to create event ❌");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Create Event
        </button>

      </form>
    </div>
  );
}

export default AddEvent;