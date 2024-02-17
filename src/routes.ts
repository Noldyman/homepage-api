import { Express } from "express";
import buddies from "./routes/buddies";
import birthdays from "./routes/birthdays";
import todos from "./routes/todos";

const baseUrl = "/api";

export default (app: Express) => {
  app.use(`${baseUrl}/buddies`, buddies);

  app.use(`${baseUrl}/birthdays`, birthdays);

  app.use(`${baseUrl}/todos`, todos);
};
