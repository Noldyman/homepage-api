import { Express } from "express";
import buddies from "./routes/buddies";

const baseUrl = "/api";

export default (app: Express) => {
  app.use(`${baseUrl}/buddies`, buddies);
};
