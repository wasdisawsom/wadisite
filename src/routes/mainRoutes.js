const express = require('express');
const path = require('path');

const router = express.Router();

const wawaRoutes = require('../routes/wawaRoutes.js')

router.use("/wawa", wawaRoutes);


router.get('/test', (req, res) =>
    res.json({message: "res-message-0"})
);

router.get('/', (req, res) =>
    res.json({message : "Hello World"})
);

router.get(/.*/, (req,res) => 
    res.redirect('/')
);

module.exports = router;