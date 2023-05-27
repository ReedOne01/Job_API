const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    const response = await mongoose.connect(uri);
    console.log(`mongodb connected: ${response.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
