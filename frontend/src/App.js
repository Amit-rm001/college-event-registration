import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventList from "./pages/EventList";
import AddEvent from "./pages/AddEvent";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="font-bold text-lg">Event Manager</h1>
        <Link to="/add" className="bg-white text-blue-600 px-3 py-1 rounded">
          Add Event
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/add" element={<AddEvent />} />
      </Routes>
    </Router>
  );
}

export default App;