const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/wawa/page.html"))
);

router.get('/logix', (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/wawa/logix.js"))
)

router.get('/icon', (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/wawa/images/eepyscug.png"))
)

router.get('/darkmode', (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/wawa/styles/darkmode.css"))
)

router.get('/lightmode', (req, res) => 
    res.sendFile(path.join(__dirname, "../apps/wawa/styles/lightmode.css"))
)

router.get(/.*/, (req, res) => 
    res.redirect('/wawa')
);



module.exports = router;