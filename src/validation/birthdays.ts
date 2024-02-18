import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const birthdayQuerySchema = Joi.object({
  interval: Joi.string()
    .required()
    .pattern(/day|week|month|year/),
});

export const validateBirthdayQuery = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await birthdayQuerySchema.validateAsync(req.query);
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
