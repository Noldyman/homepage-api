require("dotenv").config();
import express from "express";
import startDb from "./db";
import startRoutes from "./routes";

const app = express();
app.use(express.json());

startDb();
startRoutes(app);

const port = process.env.PORT;
app.listen(port, () => console.log(`App is listening on port ${port}`));
