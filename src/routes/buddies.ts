import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/buddies";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);

export default router;
