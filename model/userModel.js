const mongoose = require("mongoose");
const userScheema = new mongoose.Schema({
  Name: {
    type: String,
  },
  data: [
    {
      number: {
        type: Number,
      },
      tokenNo: {
        type: Number,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});
const user = new mongoose.model("user", userScheema);
module.exports = user;
