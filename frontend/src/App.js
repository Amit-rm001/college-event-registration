import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent"; // ✅ MUST be here

function App() {
  return (
    <Router>

      {/* Navbar */}
      <div className="p-4 bg-gray-200 flex gap-4">
        <Link to="/" className="text-blue-600 font-bold">Home</Link>
        <Link to="/add" className="text-blue-600 font-bold">Add Event</Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/edit/:id" element={<EditEvent />} /> {/* ✅ THIS LINE */}
      </Routes>

    </Router>
  );
}

export default App;