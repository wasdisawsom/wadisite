const app = require("express")();

app.get('/', (req, res) =>
    res.json({message : "Hello World"})
);

const port = process.env.PORT

app.listen(port, () => console.log(`app listening on http://localhost:${port}`))