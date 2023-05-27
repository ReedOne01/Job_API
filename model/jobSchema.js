const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  companyName: {
    type: "string",
    required: [true, "please specify company name"],
  },
  position: {
    type: "string",
    required: [true, "please specify position you are vying for"],
  },
  status: {
    type: "string",
    required: [true, "please input your job status"],
  },
});

module.exports = mongoose.model("Job", jobSchema);
