require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://rish23tech:zhph60aEGHwLSI9h@cluster0.cyf3gsp.mongodb.net/user_data"

const connectDB = async () => 
{
  try {
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;