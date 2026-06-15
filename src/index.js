const express = require("express");
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);


const port = process.env.PORT || 31415;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));