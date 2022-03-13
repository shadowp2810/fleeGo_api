const router = require("express").Router();
const Pin = require("../models/Pin");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndStore,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const CryptoJS = require("crypto-js");

//create a pin
router.post("/", verifyTokenAndStore, async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a pin
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Pin.findByIdAndDelete(req.params.id);
    res.status(200).json("Pin has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
