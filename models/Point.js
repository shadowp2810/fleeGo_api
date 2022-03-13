const mongoose = require("mongoose");

const PointsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userBar: {
      type: String,
      required: true,
    },
    userPoints: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Point", PointsSchema);
