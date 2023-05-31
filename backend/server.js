const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB(process.env.MONGO_URI);

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/jobRoute"));

app.listen(port, () => {
  console.log(`sever listening on ${port}`);
});
