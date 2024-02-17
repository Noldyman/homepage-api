import express from "express";
import { get, getCount } from "../controllers/birthdays";

const router = express.Router();

router.get("/", get);

router.get("/count", getCount);

export default router;
