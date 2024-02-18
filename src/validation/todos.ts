import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const todoSchema = Joi.object({
  text: Joi.string().required().max(50),
  isComplete: Joi.boolean().required(),
});

export const validateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await todoSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
