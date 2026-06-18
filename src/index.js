const express = require("express");
const app = express()
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);


const port = process.env.PORT || 31415;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));