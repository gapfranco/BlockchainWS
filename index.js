const express = require("express");
const helmet = require("helmet");
const block = require("./routes/block");

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
    res.json({
        "API": "blockchainWS",
        "version": "1.0"
    });
  });

app.use("/block", block);

const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
