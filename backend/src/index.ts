import express from "express";

import { defaultRoute } from "./routes/defaultRoute";

const app: express.Application = express();

app.use((req, res, next) => {
  // cors stuff, careful with *
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  next();
});

app.use(defaultRoute);
app.listen(3333, () => {
  console.log("Backed initiated successfully on port 3333");
});
