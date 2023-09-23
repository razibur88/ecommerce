const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const categoryRoute = require("./category");

router.use("/auth", authRoutes);
router.use("/category", categoryRoute);

module.exports = router;
