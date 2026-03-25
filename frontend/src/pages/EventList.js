import React, { useEffect, useState } from "react";
import axios from "axios";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        College Events 🎉
      </h1>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No events yet</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event._id} className="bg-white p-5 rounded-xl shadow">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p>{event.description}</p>
              <p>📅 {new Date(event.date).toDateString()}</p>
              <p>📍 {event.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EventList;