import http from "http";
import express from "express";

import { config } from "./config/app";
import { initRoutes } from "./routes";

import Responder from "./lib/expressResponder";

const initApp = async () => {
  try {
    const expressApp = express();
    expressApp.use(express.json());
    expressApp.use(express.static("./"));

    initRoutes(expressApp);
    expressApp.use(Responder.notFound);

    http.createServer(expressApp).listen(config.get("port"));
    console.info(`Server listening at port ${config.get("port")}`);
  } catch (error) {
    console.error(`Error in initialising App:- ${error.message}`);
  }
};

initApp()
  .then()
  .catch(error => console.error(error));
