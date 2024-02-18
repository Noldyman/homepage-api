import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const buddySchema = Joi.object({
  name: Joi.string().required().max(35),
  dateOfBirth: Joi.date().required().less("now"),
});

export const validateBuddy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await buddySchema.validateAsync(req.body);
    return next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
