const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/eventRoutes");
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://amitkannoujiyarm_db_user:UaEkQeEJ4ioXou3o@college-event-registrat.0tsm3mm.mongodb.net/?appName=college-event-registration")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));
console.log(eventRoutes);

app.use("/api/events", eventRoutes);

const EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  location: String
});

app.get("/", (req, res) => {
  res.send("College Event API Running 🚀");
});

app.post("/events", async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});