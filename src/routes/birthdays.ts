import express from "express";
import { get, getCount } from "../controllers/birthdays";
import { validateBirthdayQuery } from "../validation/birthdays";

const router = express.Router();

router.get("/", validateBirthdayQuery, get);

router.get("/count", getCount);

export default router;
