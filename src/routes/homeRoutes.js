const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/home/home.html"))
);

router.get(/.*/, (req, res) => 
    res.redirect("/")
);

module.exports = router;