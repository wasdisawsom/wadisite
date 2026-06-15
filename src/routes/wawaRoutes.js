const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/wawa/page.html"))
);

router.get(/.*/, (req, res) => 
    res.redirect('/wawa')
);



module.exports = router;