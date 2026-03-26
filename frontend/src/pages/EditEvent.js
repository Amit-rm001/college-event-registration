import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => {
        const event = res.data.find(e => e._id === id);
        if (event) setForm(event);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/events/${id}`, form);
      alert("Event Updated ✅");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Update failed ❌");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="description" value={form.description} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded" />
        <input name="location" value={form.location} onChange={handleChange} className="w-full p-2 border rounded" />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update Event
        </button>

      </form>
    </div>
  );
}

export default EditEvent; // ✅ VERY IMPORTANT