const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const BookingModel = require('./models/users');

// middleware
dotenv.config();
connectDB();
const app = express();

// Middleware order matters
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res) => {
  console.log("Backend Deployed!");
})

// get request to the database
// endpoint == /getUsers/
app.get('/getUsers/:id', async (req, res) => {
  console.log("Fetching users from the database...");

  const ref = parseInt(req.params.id);

  if (isNaN(ref)) {
    return res.status(400).json({ error: "Booking number is not a valid number" });
  }

  try {
    const users = await BookingModel.find({ booking_id: ref });
    // console.log("Users found:", users);
    if(users){
      console.log("USER FOUND!");
      // console.log("");
    }
    else {
      console.log("NOT FOUND!");
    }
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
