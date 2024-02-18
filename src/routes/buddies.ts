import express from "express";
import { create, getAll, getById, remove, update } from "../controllers/buddies";
import { validateId } from "../validation/validateId";
import { validateBuddy } from "../validation/buddies";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", validateId, getById);

router.post("/", validateBuddy, create);

router.put("/:id", [validateId, validateBuddy], update);

router.delete("/:id", validateId, remove);

export default router;
