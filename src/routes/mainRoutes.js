const express = require("express");
const path = require("path");

const router = express.Router();

const wawaRoutes = require("../routes/wawaRoutes.js");
const homeRoutes = require("../routes/homeRoutes.js");

router.use("/wawa", wawaRoutes);
router.use("/", homeRoutes);



module.exports = router;