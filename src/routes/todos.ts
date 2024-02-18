import express from "express";
import { getAll, create, update, remove } from "../controllers/todos";
import { validateTodo } from "../validation/todos";
import { validateId } from "../validation/validateId";

const router = express.Router();

router.get("/", getAll);

router.post("/", validateTodo, create);

router.put("/:id", [validateId, validateTodo], update);

router.delete("/:id", validateId, remove);

export default router;
