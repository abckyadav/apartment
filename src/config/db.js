const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://fw12_158:fw12_158@cluster0.lqrz4.mongodb.net/apartment"
    );
    console.log("Mongodb Connected");
  } catch (err) {
    console.log(`Error connecting to server`);
  }
};

module.exports = connectDB;
