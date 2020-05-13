const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ langCode: "ja" }));

app.listen(3000, () => console.log(`https://localhost:3000`));
