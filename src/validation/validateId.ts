import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const idSchema = Joi.object({
  id: Joi.number().required().integer().positive().max(2147483647),
});

export const validateId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await idSchema.validateAsync({ id: req.params.id });
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
