import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [events, setEvents] = useState([]);

  // Fetch events
  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  // Delete event
  const deleteEvent = async (id) => {
    try {
      console.log("Deleting:", id);

      await axios.delete(`http://localhost:5000/api/events/${id}`);

      // Refresh list
      const res = await axios.get("http://localhost:5000/api/events");
      setEvents(res.data);

    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete failed ❌");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Events</h1>

      {events.length === 0 && <p>No events found</p>}

      {events.map((event) => {
        return (
          <div key={event._id} className="border p-4 mb-3 rounded shadow">
            <h2 className="text-xl font-bold">{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
<Link to={`/edit/${event._id}`}>
  <button className="mt-2 mr-2 bg-yellow-500 text-white px-3 py-1 rounded">
    Edit
  </button>
</Link>
            <button
              onClick={() => deleteEvent(event._id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;