
//old syntaxt
// consdt express =require("express")
//type:module
import express from "express";
import cors from "cors";
import morgan from "morgan";

import db from "./db/connection.js"
import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT || 4567;

//give access to req.body
app.use(express.json());
app.use(cors());
//change after deployment and we know everything is worng "tiny or small"
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res) => res.send("<h1>Hello im here</h1>"));

db.on("connected", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, console.log(`Connected to port: ${PORT}`))
})