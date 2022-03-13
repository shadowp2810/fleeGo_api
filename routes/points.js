const router = require("express").Router();
const Point = require("../models/Point");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndStore,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const CryptoJS = require("crypto-js");

//GET Point
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const point = await Point.findById(req.params.id);
    res.status(200).json(point);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
