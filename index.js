const express = require("express");
const helmet = require("helmet");
const block = require("./routes/block");

const version = 1;
const port = 8000;

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
    res.json({
        "API": "blockchainWS",
        "version": version
    });
  });

app.use("/block", block);


app.listen(port, () => console.log(`Listening on port ${port}`));
