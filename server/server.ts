import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import nodeCache from "node-cache";
import { equipmentHandler } from "./handler";

// initialize the app
const app = express();

// initialize the cache
export const myCache = new nodeCache();

// setting up static file serving middleware
app.use(express.static(path.join(__dirname, "..", "build")));

// setting up request body parser middleware
app.use(express.json());

// setting up logging
app.use(morgan("dev"));

// enable cors for development
app.use(cors());

// client content serving route
app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// equipment route
app.get("/equipments", equipmentHandler);

app.listen(80, () => console.log("App listening to requests..."));
