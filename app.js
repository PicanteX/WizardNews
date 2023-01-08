const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan('dev'));

app.get("/", (req, res) => res.send("Hello World!"));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
