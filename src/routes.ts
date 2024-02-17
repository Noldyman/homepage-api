import { Express } from "express";
import buddies from "./routes/buddies";
import birthdays from "./routes/birthdays";

const baseUrl = "/api";

export default (app: Express) => {
  app.use(`${baseUrl}/buddies`, buddies);

  app.use(`${baseUrl}/birthdays`, birthdays);
};
