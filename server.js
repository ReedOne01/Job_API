const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
connectDB(process.env.MONGO_URI);
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/api/job", require("./routes/jobRoute"));

app.listen(port, () => {
  console.log(`sever listening on ${port}`);
});
