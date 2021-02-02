import express from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import nodeCache from "node-cache";
import { equipmentHandler } from "./handler";

// read and parse the environment variables
dotenv.config();

// initialize the app
const app = express();

// initialize the cache
export const myCache = new nodeCache();

// setting up static file serving middleware
app.use(express.static(path.join(__dirname, "..", "build")));

// setting up request body parser middleware
app.use(express.json());

// setting up logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// enable cors for development
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}

// client content serving route
app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// equipment route
app.get("/equipments", equipmentHandler);

app.listen(process.env.REACT_APP_PORT, () =>
  console.log(
    `App listening to requests at port ${process.env.REACT_APP_PORT}...`
  )
);
