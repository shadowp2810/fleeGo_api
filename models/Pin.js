const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    storename: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
