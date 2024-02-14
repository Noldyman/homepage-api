require("dotenv").config();
import express from "express";
import startDb from "./db";

const app = express();
app.use(express.json());

startDb();

const port = process.env.PORT;
app.listen(port, () => console.log(`App is listening on port ${port}`));
