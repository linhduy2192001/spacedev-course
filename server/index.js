import path from "path";
import express from "express";
const app = express();

app.use(express.static("../dish"));

app.all("*", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.listen(3000, () => {
  console.log("Server listen on port 3000");
});
