const express = require("express");
const router = express.Router();

const addOrder = require("../controllers/orders/addOrder");
const getOrder = require("../controllers/orders/getOrder");

const protect = require("../middleware/protectRoutes");

router
  .post("/add-order", protect, addOrder)
  .get("/get-order", protect, getOrder);

module.exports = router;
