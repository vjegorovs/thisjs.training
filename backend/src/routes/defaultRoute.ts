import express from "express";

export const defaultRoute: express.Router = express.Router();

defaultRoute.get("/", (req, res, next) => {
  res.json({ message: "Success! You get a nice json response now." });
});
