import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("working!!");
});

app.listen(5000, () => console.log("App listening"));
